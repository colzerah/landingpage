import React from "react";
import { StyledButton } from "./styles";

interface IButton {
  title: string;
  type?: "button" | "submit";
  width: string;
  height: string;
  onClick?: () => void;
  colorScheme?: "primary" | "secondary";
  fontScheme?: "primary" | "secondary";
}

export const Button = ({
  title,
  type,
  width,
  height,
  onClick,
  colorScheme = "primary",
  fontScheme = "primary",
}: IButton) => {
  return (
    <StyledButton
      colorScheme={colorScheme}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
      fontScheme={fontScheme}
    >
      {title}
    </StyledButton>
  );
};
