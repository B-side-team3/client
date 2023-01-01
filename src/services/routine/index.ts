import api from "@utils/interceptor";
import type {
  Routine,
  RoutineEnd,
  RoutineParams,
  RoutineResponse,
  RoutineUpdate,
} from "types/member-routine";
import type { TaskResponse } from "types/task";

export const getTask = async (data: RoutineParams): Promise<TaskResponse[]> => {
  return api.post(`routines/list/tasks`, { data });
};
export const postRoutine = async (
  data: RoutineParams,
): Promise<RoutineResponse[]> => {
  return api.post(`routines/list`, { data });
};

export const endRoutine = async (
  data: RoutineEnd,
): Promise<RoutineResponse[]> => {
  return api.post(`routines/list`, { data });
};

export const updateRoutine = async (data: RoutineUpdate): Promise<Routine> => {
  return api.patch(`routines/list`, { data });
};

export const deleteRoutine = async (data: RoutineUpdate) => {
  return api.delete(`routines/list`, { data });
};

export const getRoutineDetail = async (
  data: RoutineUpdate,
): Promise<RoutineResponse> => {
  return api.get(`routines/list`, { data });
};

export const createRoutine = async (
  data: RoutineUpdate,
): Promise<RoutineResponse> => {
  return api.post(`routines/list`, { data });
};
