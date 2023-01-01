export interface Routine {
  anchor: string;
  endDate: string;
  isDeleted: number;
  memberId: number;
  routineId: number;
  startDate: string;
  startTime: string;
  status: string;
}

export interface RoutineResponse extends Routine {
  createdDate: string;
  memberRoutineId: number;
  totalTime: number;
}

export interface RoutineUpdate {
  memberRoutineId: number;
}

export interface RoutineEnd {
  memberId: number;
}

export interface RoutineParams {
  memberId: number;
  date: string;
}
