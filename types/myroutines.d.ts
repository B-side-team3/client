export interface DateType {
  date: string;
}

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

export interface ListResponse {
  anchor: string;
  color: string;
  createdDate: string;
  endDate: string;
  isDeleted: number;
  isPush: number;
  memberId: number;
  memberRoutineId: number;
  memberTaskList: {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  };
  routineId: number;
  startDate: string;
  startTime: string;
  status: string;
  totalTime: number;
}
