import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";

import Text from "components/atoms/Text";

export interface InputTextProps {
  required: boolean;
  type?: string;
  label?: string;
  labelColor?: string;
  placeholder?: string;
  inputHeight?: string;
  value?: string;
  disabled?: boolean;
  error?: string;
  onChange?: (event: string) => void;
  style?: React.CSSProperties;
}

const { spacing } = theme;

const Container = styled.div<{ inputHeight?: string }>`
  width: 100%;
  height: auto;
`;

const Input = styled.input<{
  isFocus: boolean;
  error?: string;
  inputHeight?: string;
}>`
  ${({
    theme: { spacing, fontSize, fontWeight, borderRadius, colors },
    isFocus,
    error,
  }) => `
    background: ${colors.white};
    border: ${
      isFocus && !error
        ? `2px solid ${colors.black}`
        : error
        ? `2px solid ${colors.redDark}`
        : "2px solid transparent"
    };
    padding: ${spacing.two};
    font-size: ${fontSize.large};
    font-weight: ${fontWeight.bold};
    border-radius: ${borderRadius.big};
  `}
  font-family: "Comfortaa", cursive;
  width: calc(100% - 32px);
  :disabled {
    opacity: 0.6;
    box-shadow: none;
    cursor: not-allowed;
  }
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

const InputText: React.FC<InputTextProps> = ({
  required,
  type = "text",
  placeholder,
  label,
  labelColor = "black",
  inputHeight,
  value = "",
  disabled,
  error,
  onChange,
  style,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Container style={style}>
      <Text
        fontSize="medium"
        fontWeight="bold"
        color={labelColor ? labelColor : "black"}
        style={{ marginBottom: spacing.one }}
      >
        {label}
      </Text>
      <Input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        isFocus={isFocus}
        error={error}
        inputHeight={inputHeight}
        onChange={(event) => {
          if (onChange) onChange(event.target.value);
        }}
        value={value}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
        disabled={disabled}
        type={type}
      />
      {error && error !== "" && (
        <Text
          fontSize="small"
          fontWeight="bold"
          color="redDark"
          style={{ marginTop: spacing.zero, marginLeft: spacing.two }}
        >
          {error}
        </Text>
      )}
    </Container>
  );
};

export default InputText;
