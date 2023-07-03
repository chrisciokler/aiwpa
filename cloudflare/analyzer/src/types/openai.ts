import { ChatCompletionRequestMessageRoleEnum } from 'openai-edge';

export type ChatGPTModel = 'gpt-3.5-turbo-0613' | 'gpt-3.5-turbo-16k-0613' | 'gpt-4-0613' | 'gpt-4-32k-0613';

export interface OpenAiChatCompletationData {
  id: string;
  object: string;
  created: number;
  model: ChatGPTModel;
  usage: Usage;
  choices: Choice[];
}

export interface Choice {
  message: Message;
  finish_reason: string;
  index: number;
}

export interface Message {
  role: ChatCompletionRequestMessageRoleEnum;
  content: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export type OpenAIModelIdWithType =
  | { type: 'chat_completions'; value: OpenAIChatCompletionsModelId }
  | { type: 'completions'; value: OpenAICompletionsModelId };

export type OpenAIChatCompletionsModelId =
  | 'gpt-4'
  | 'gpt-4-0613'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0613'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-0613'
  | 'gpt-3.5-turbo-16k-0613';

export type OpenAICompletionsModelId =
  | 'text-davinci-003'
  | 'text-davinci-002'
  | 'text-curie-001'
  | 'text-babbage-001'
  | 'text-ada-001'
  | 'davinci'
  | 'curie'
  | 'babbage'
  | 'ada';
