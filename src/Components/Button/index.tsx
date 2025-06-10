import React from "react";
import { StyledButton } from "./styles";

interface IButton {
  title: string;
  backgroundColor?: string;
  color?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button = ({
  title,
  backgroundColor,
  color,
  type,
  onClick,
}: IButton) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      type={type}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
