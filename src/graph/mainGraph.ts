import { StateGraph, START, END } from '@langchain/langgraph';
import { AppointmentStateAnnotation, type GraphState } from './graph.ts';
import { createSubchainNode } from './nodes/subchainNode.ts';

type Chain = {
  invoke: (state: GraphState) => Promise<GraphState>;
};

export function buildMainGraph(params: {
  module01Chain: Chain;
  module02Chain: Chain;
}) {
  const workflow = new StateGraph({
    stateSchema: AppointmentStateAnnotation,
  })
    .addNode('module01', createSubchainNode(params.module01Chain))
    .addNode('module02', createSubchainNode(params.module02Chain))
    .addEdge(START, 'module01')
    .addEdge('module01', 'module02')
    .addEdge('module02', END);

  return workflow.compile();
}
