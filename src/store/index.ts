import type { RecoilState } from "recoil";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

interface IRoot {
  spinner: boolean;
  login?: boolean;
}

export const Root: RecoilState<IRoot> = atom<IRoot>({
  key: "Root",
  default: {
    spinner: false,
  },
});
