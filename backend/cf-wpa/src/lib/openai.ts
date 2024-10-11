import { createParser, ParsedEvent, ReconnectInterval } from 'eventsource-parser';
import { ChatCompletionRequestMessage, OpenAIApi } from 'openai-edge/types/api';
import { OpenAIModelIdWithType } from 'types/openai';
import GPT3Tokenizer from 'gpt3-tokenizer';

const getChunkText = (response: any, model: OpenAIModelIdWithType) => {
  switch (model.type) {
    case 'chat_completions': {
      return response.choices[0].delta.content;
    }
    default: {
      return response.choices[0].text;
    }
  }
};

export const moderate = async (ai: OpenAIApi, messages: ChatCompletionRequestMessage[]) => {
  const text = messages.map((i) => i.content).join(' ');
  const moderation = await ai.createModeration({ input: text });
  const moderationResponse = (await moderation.json()) as any;
  return moderationResponse.results[0].flagged;
};

const STREAM_SEPARATOR = '___START_RESPONSE_STREAM___';
export const streamCompletion = (res: Response) => {
  let counter = 0;
  let didSendHeader = false;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  return new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === 'event') {
          const data = event.data;
          if (data === '[DONE]') {
            return;
          }

          try {
            if (!didSendHeader) {
              const queue = encoder.encode(`${JSON.stringify([])}${STREAM_SEPARATOR}`);
              controller.enqueue(queue);
              didSendHeader = true;
            }
            const json = JSON.parse(data);
            const text = getChunkText(json, { type: 'chat_completions', value: 'gpt-3.5-turbo' });

            if (counter < 2 && (text?.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }

      parser.reset();
      controller.close();
    }
  });
};

export const tokenCounter = (text: string) => {
  const tokenizer = new GPT3Tokenizer({ type: 'gpt3' });
  const allTextEncoded = tokenizer.encode(text);
  const tokenCount = allTextEncoded.text.length;
  return tokenCount;
};
