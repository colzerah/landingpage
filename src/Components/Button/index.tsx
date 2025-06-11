import React from "react";
import { StyledButton } from "./styles";

interface IButton {
  title: string;
  $bgcolor?: string;
  color?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button = ({ title, $bgcolor, color, type, onClick }: IButton) => {
  return (
    <StyledButton
      $bgcolor={$bgcolor}
      color={color}
      type={type}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
