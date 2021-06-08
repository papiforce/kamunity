import React from "react";
import styled from "styled-components";

export interface TextProps {
  fontSize: string;
  fontWeight: string;
  color?: string;
  textAlign?: string;
  lineHeight?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const TextStyle = styled.div<TextProps>`
  ${({ theme, color, fontSize, fontWeight, textAlign, lineHeight }) => `
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    color: ${color ? theme.colors[color] : theme.colors.black};
    text-align: ${
      textAlign ? theme.textAlign[textAlign] : theme.textAlign.left
    };
    line-height: ${lineHeight ? lineHeight : theme.fontSize[fontSize]};
  `}
  margin: 0;
`;

const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  fontWeight,
  color,
  textAlign,
  lineHeight,
  style,
  onClick,
  ...props
}) => {
  return (
    <TextStyle
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      textAlign={textAlign}
      lineHeight={lineHeight}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </TextStyle>
  );
};

export default Text;
