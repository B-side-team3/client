import api from "@utils/interceptor";
import type {
  TaskCreateData,
  TaskParams,
  TaskResponse,
  TaskUpdateParams,
} from "types/task";

export const getTask = async ({
  routineId,
}: TaskParams): Promise<TaskResponse> => {
  return api.get(`routines/${routineId}/tasks`);
};

export const createTask = async (
  { routineId }: TaskParams,
  data: TaskCreateData,
): Promise<TaskResponse> => {
  return api.post(`routines/${routineId}/tasks`, { data });
};

export const updateTask = async ({
  routineId,
  memberTaskId,
}: TaskUpdateParams): Promise<TaskResponse> => {
  return api.get(`routines/${routineId}/tasks/${memberTaskId}`);
};
