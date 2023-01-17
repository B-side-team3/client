import api from "@utils/interceptor";
import type { TaskResponse, ListResponse } from "types/myroutines";

export const getTaskList = async (): Promise<TaskResponse[]> => {
  return api.get(`/myRoutines/list/tasks`);
};

export const getList = async (): Promise<ListResponse[]> => {
  return api.get(`/myRoutines/list`);
};
