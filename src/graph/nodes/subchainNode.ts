import type { GraphState } from '../graph.ts';

type RunnableSubchain = {
  invoke: (state: GraphState) => Promise<GraphState>;
};

export function createSubchainNode(subchain: RunnableSubchain) {
  return async (state: GraphState): Promise<Partial<GraphState>> => {
    const result = await subchain.invoke(state);

    return {
      ...result,
    };
  };
}
