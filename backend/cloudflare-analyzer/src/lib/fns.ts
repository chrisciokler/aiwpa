import { Context } from 'hono';
import { moderate, streamCompletion, tokenCounter } from 'lib/openai';
import { advancedClean, extractHtml } from 'lib/crawler';
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

  let response = await extractHtml(url);
  let data = response;

  const messages: ChatCompletionRequestMessage[] = [
    { role: 'system', content: system },
    { role: 'user', content: data }
  ];

  const notallowed = moderate(ai, messages);
  if (notallowed) c.json({ notallowed });

  const payload = {
    model,
    messages,
    stream: true
  };

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key ?? ''}`
    },
    method: 'POST',
    body: JSON.stringify(payload)
  });

  const stream = streamCompletion(res);

  return c.newResponse(stream);
};

export const subscribe = async (c: Context) => {
  const results = await INSERTEMAIL(c);

  return c.json({ results });
};
