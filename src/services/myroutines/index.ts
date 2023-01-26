import api from "@utils/interceptor";
import type { DateType, TaskResponse, ListResponse } from "types/myroutines";

export const getTaskList = async (
  params: DateType,
): Promise<TaskResponse[]> => {
  return api.get(`/myRoutines/list/tasks`, { params });
};

export const getList = async (params: DateType): Promise<ListResponse[]> => {
  return api.get(`/myRoutines/list`, { params });
};
