import { defaultConfig } from '../config.ts'
import { LlmRouterService } from '../services/LlmRouterService.ts'
import { AppointmentService } from '../services/AppointmentService.ts'
import { buildAppointmentGraph } from './graph.ts';


export function buildGraph() {
  const llmClient = new LlmRouterService(defaultConfig)
  const appointmentService = new AppointmentService()
  return buildAppointmentGraph(
    llmClient,
    appointmentService,
  );
}

export const graph = async () => {
  return buildGraph();
};