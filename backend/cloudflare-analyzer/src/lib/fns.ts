import { Context } from 'hono';
import { moderate, streamCompletion } from 'lib/openai';
import { extractHtml } from 'lib/crawler';
import { ChatCompletionRequestMessage } from 'openai-edge';
import { OpenAIChatCompletionsModelId } from 'types/openai';
import { openai } from 'config/openai';
import { INSERTEMAIL } from './db';

export const hello = async (c: Context) => {
  return c.text('🤖 Hello, I am your AI Assistant API!');
};

export const version = async (c: Context) => {
  return c.text('🤖 Hello, I am your AI Assistant API!. You are in version 1.0.0');
};

type RequestProps = { org: string; key: string; url: string; system; model: OpenAIChatCompletionsModelId };
export const siteAnalyzer = async (c: Context) => {
  const { org, key, url, model, system } = (await c.req.json()) as RequestProps;

  const ai = openai(org, key);

  const response = await extractHtml(url);

  const messages: ChatCompletionRequestMessage[] = [
    { role: 'system', content: system },
    { role: 'user', content: response }
  ];

  const notallowed = moderate(ai, messages);
  if (notallowed) c.json({ notallowed });

  const res = await ai.createChatCompletion({
    model,
    messages,
    stream: true
  });

  const stream = streamCompletion(res);

  return c.newResponse(stream);
};

export const subscribe = async (c: Context) => {
  const results = await INSERTEMAIL(c);

  return c.json({ results });
};
