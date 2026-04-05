import { type GraphState } from "../graph.ts";

export function fallbackNode(state: GraphState): GraphState {
  const message = "Unknown command. Try 'make this uppercase' or 'convert to lowercase'.";
 
  return {
    ...state,
    output: message,
  };
}
