import { buildAppointmentGraph } from '../../graph/graph.ts';
import { LlmRouterService } from '../../services/LlmRouterService.ts';
import { AppointmentService } from '../../services/AppointmentService.ts';

export function buildModule01Chain(
  llmClient: LlmRouterService,
  appointmentService: AppointmentService,
) {
  return buildAppointmentGraph(llmClient, appointmentService);
}
