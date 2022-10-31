import styled from "styled-components";

const Div = styled.div<React.CSSProperties>`
  ${({ display }) => display && `display : ${display}`};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};

  flex: ${({ flex }) => flex};
  align-content: ${({ alignContent }) => alignContent};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ flexWrap }) => flexWrap && `flex-wrap : ${flexWrap}`};
  ${({ flexShrink }) => flexShrink && `flex-shrink : ${flexShrink}`};
  ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};

  vertical-align: ${({ verticalAlign }) => verticalAlign};
  text-align: ${({ textAlign }) => textAlign};

  ${({ gap }) => gap && `gap: ${gap} `};

  margin: ${({ margin }) => margin};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  padding: ${({ padding }) => padding};
  ${({ paddingTop }) => paddingTop && `padding-top : ${paddingTop}`};
  ${({ paddingRight }) => paddingRight && `padding-right : ${paddingRight}`};
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom : ${paddingBottom}`};
  ${({ paddingLeft }) => paddingLeft && `padding-left : ${paddingLeft}`};

  ${({ height }) => height && `height : ${height}`};
  ${({ minHeight }) => minHeight && `min-height : ${minHeight}`};
  ${({ width }) => width && `width : ${width}`};
  ${({ maxWidth }) => maxWidth && `max-width : ${maxWidth}`};

  background: ${({ background, theme }) =>
    background ? theme.colours[background] : null};
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-repeat: ${({ backgroundRepeat }) => backgroundRepeat};
  color: ${({ color, theme }) => (color ? theme.colours[color] : "black")};
  border: ${({ border }) => border};
  border-right: ${({ borderRight }) => borderRight};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-sizing: ${({ boxSizing }) => boxSizing};

  font-size: ${({ fontSize, theme }) =>
    fontSize ? theme.fontSize[fontSize] : theme.fontSize.base};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  box-shadow: ${({ boxShadow }) => boxShadow};

  overflow: ${({ overflow }) => overflow};
  cursor: ${({ cursor }) => cursor};
  z-index: ${({ zIndex }) => zIndex};
  animation: ${({ animation }) => animation};
  transform: ${({ transform }) => transform};
`;

export default Div;
