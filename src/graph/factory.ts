import { defaultConfig } from '../config.ts'
import { LlmRouterService } from '../services/LlmRouterService.ts'
import { AppointmentService } from '../services/AppointmentService.ts'
import { buildModule01Chain } from '../chains/module-01/factory.ts';
import { buildModule02Chain } from '../chains/module-02/factory.ts';
import { buildMainGraph } from './mainGraph.ts';


export function buildGraph() {
  const llmClient = new LlmRouterService(defaultConfig)
  const appointmentService = new AppointmentService()

  const module01Chain = buildModule01Chain(
    llmClient,
    appointmentService,
  );
  const module02Chain = buildModule02Chain();

  return buildMainGraph({
    module01Chain,
    module02Chain,
  });
}

export const graph = async () => {
  return buildGraph();
};