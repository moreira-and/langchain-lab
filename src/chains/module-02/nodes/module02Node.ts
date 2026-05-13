import { AIMessage } from 'langchain';
import type { GraphState } from '../../../graph/graph.ts';

export function createModule02Node() {
  return async (state: GraphState): Promise<Partial<GraphState>> => {
    return {
      messages: [
        ...state.messages,
        new AIMessage('Module 02 chain is ready to be implemented.'),
      ],
    };
  };
}
