import styled from "styled-components";

export const StyledButton = styled.button<{
  width: string;
  height: string;
  colorScheme: "primary" | "secondary";
  fontScheme: "primary" | "secondary";
}>`
  background-color: ${({ theme, colorScheme }) => {
    if (colorScheme === "primary") {
      return theme.colors.purple200;
    }
    return theme.colors.yellow100;
  }};
  color: ${({ theme, colorScheme }) => {
    if (colorScheme === "primary") {
      return theme.colors.white100;
    }
    return theme.colors.gray200;
  }};
  font-family: ${({ theme, fontScheme }) => {
    if (fontScheme === "primary") {
      return theme.fonts.primary;
    }
    return theme.fonts.secondary;
  }};
  cursor: pointer;
  border-radius: 58px;
  border: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 10px 30px;
`;
