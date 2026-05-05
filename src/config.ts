export type ModelConfig = {
  apiKey: string;
  baseURL: string;
  httpReferer: string;
  xTitle: string;

  provider: {
    sort: {
      by: string;
      partition: string;
    };
  };

  models: string[];
  temperature: number;
};

console.assert(process.env.OPENROUTER_API_KEY, 'OPENROUTER_API_KEY is not set in environment variables');

export const defaultConfig: ModelConfig = {
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: 'https://openrouter.ai/api/v1',
  httpReferer: '',
  xTitle: 'langchain-lab',
  models: [
    // https://openrouter.ai/models?fmt=cards&max_price=0&supported_parameters=response_format
    'arcee-ai/trinity-large-preview:free',
  ],
  provider: {
    sort: {
      by: 'throughput', // Route to model with highest throughput (fastest response)
      partition: 'none',
    },
  },
  temperature: 0.7,
};