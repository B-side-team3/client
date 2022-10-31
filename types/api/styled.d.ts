import "styled-components";
import type { borderRaduis, colours, fontSize } from "../../src/styles/Theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: { [key in fontSize]: string };
    borderRadius: { [key in borderRaduis]: string };
    colours: { [key in colours]: string };
    mediaSizes: ISizes;
  }
}

interface ISizes {
  mobile: number;
  tablet: number;
  desktop: number;
}
