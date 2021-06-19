import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";

import Text from "components/atoms/Text";

export interface TextAreaProps {
  label?: string;
  labelColor?: string;
  placeholder?: string;
  value?: string;
  style?: React.CSSProperties;
  onChange?: (value: string) => void;
}

const { spacing } = theme;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const AreaStyled = styled.textarea<{ isFocus: boolean }>`
  ${({
    theme: { borderRadius, spacing, colors, fontSize, fontWeight },
    isFocus,
  }) => `
    border-radius: ${borderRadius.big};
    padding: ${spacing.two};
    border: ${isFocus ? `2px solid ${colors.black}` : "2px solid transparent"};
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
  `}
  font-family: "Comfortaa", cursive;
  width: 100%;
  max-width: 695px;
  min-height: 210px;
  resize: vertical;

  :focus {
    box-shadow: none;
    outline: none;
  }
`;

const TextArea: React.FC<TextAreaProps> = ({
  label,
  labelColor,
  placeholder,
  value,
  style,
  onChange,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Container {...props}>
      <Text
        fontSize="medium"
        fontWeight="bold"
        color={labelColor ? labelColor : "black"}
        style={{ marginBottom: spacing.one }}
      >
        {label}
      </Text>
      <AreaStyled
        placeholder={placeholder}
        value={value}
        isFocus={isFocus}
        style={style}
        onChange={(event) => {
          if (onChange) onChange(event.target.value);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      ></AreaStyled>
    </Container>
  );
};

export default TextArea;
