import { StateGraph, START, END } from '@langchain/langgraph';
import { createModule02Node } from './nodes/module02Node.ts';
import { AppointmentStateAnnotation } from '../../graph/graph.ts';

export function buildModule02Chain() {
  const workflow = new StateGraph({
    stateSchema: AppointmentStateAnnotation,
  })
    .addNode('module02', createModule02Node())
    .addEdge(START, 'module02')
    .addEdge('module02', END);

  return workflow.compile();
}
