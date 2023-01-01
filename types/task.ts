export interface TaskResponse {
  actualTime: number;
  createdDate: string;
  isDeleted: number;
  memberId: number;
  memberTaskId: number;
  routineId: number;
  status: string;
  taskId: number;
}

export interface TaskParams {
  routineId: number;
}

export interface TaskUpdateParams extends TaskParams {
  memberTaskId: number;
}

export type TaskCreateData = Omit<TaskResponse, "createdDate" | "routineId">;
