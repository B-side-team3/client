import api from "@utils/interceptor";
import type { Response } from "types/mypage";

export const getProfile = async (): Promise<Response[]> => {
  return api.get(`/myPage/profile`);
};

export const updateProfile = async (data: Response): Promise<Response[]> => {
  return api.post(`/myPage/profile/update`, { data });
};
