import type { CSSProperties } from "react";
import styled from "styled-components";

const designList = {
  submit: `
    color: #2D3748;
    background: #38B2AC;
  `,
};

export type TDesignType = "submit";

export default styled.button<
  CSSProperties & {
    designType?: TDesignType;
  }
>`
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  color: ${({ color, theme }) => (color ? theme.colours[color] : "black")};
  ${({ theme }) => `border-radius:${theme.borderRadius.smd}`};
  ${({ designType }) => designType && designList[designType]}
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius && theme.borderRadius[borderRadius]};

  :focus {
    outline: 0;
    -webkit-appearance: none;
  }
`;
