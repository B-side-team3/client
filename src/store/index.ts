import { atom } from "recoil";
import { v1 } from "uuid";

interface IUserInfo {
  token: string;
  login?: boolean;
}

export const TokenStore = atom<IUserInfo>({
  key: `Root/${v1()}`,
  default: {
    token: "",
  },
});
