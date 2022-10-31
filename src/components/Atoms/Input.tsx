import type { CSSProperties } from "styled-components";
import styled from "styled-components";
import Theme from "../../styles/Theme";

const designList = {
  submit: `
    color: ${Theme.colours["bluegray-800"]};
    background: ${Theme.colours["teal-500"]};
    cursor: pointer;
    border-radius: 0.3125rem;
    font-weight: bold;
    height: 68px;
  `,
};

export type TDesignType = "submit";

export default styled.input<CSSProperties & { designType?: TDesignType }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || "8px"};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "100%"};
  border: ${({ border }) => border};
  box-sizing: border-box;

  border-radius: ${({ borderRadius, theme }) =>
    borderRadius && theme.borderRadius[borderRadius]};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.base};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor && theme.colours[backgroundColor]};

  ${({ designType }) => designType && designList[designType]}

  cursor: ${({ cursor }) => cursor};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--grey-300);
  }
`;
