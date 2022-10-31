declare type TResponseType<T> = {
  status: number;
  message: string | null;
  payload: T;
};
