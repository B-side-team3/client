import { atom } from "recoil";

interface IRoot {
  token: string;
  login?: boolean;
}

export const TokenStore = atom<IRoot>({
  key: "Root",
  default: {
    token: "",
  },
});
