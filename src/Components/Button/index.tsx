import React from "react";
import { StyledButton } from "./styles";

interface IButton {
  title: string;
  bgcolor?: string;
  color?: string;
  type?: "button" | "submit";
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  bgcolor,
  color,
  type,
  width,
  height,
  onClick,
}: IButton) => {
  return (
    <StyledButton
      bgcolor={bgcolor}
      color={color}
      type={type}
      width={width}
      height={height}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
