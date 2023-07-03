import { Configuration, OpenAIApi } from 'openai-edge';

export const openai = (org: string, key: string) => {
  const configuration = new Configuration({
    organization: org,
    apiKey: key
  });
  const openai = new OpenAIApi(configuration);
  return openai;
};
