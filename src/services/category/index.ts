import api from "@utils/interceptor";
import type { RoutineParams } from "types/member-routine";
import type { TaskResponse } from "types/task";

export const getMemberTask = async (
  data: RoutineParams,
): Promise<TaskResponse[]> => {
  return api.post(`routines/list/tasks`, { data });
};
