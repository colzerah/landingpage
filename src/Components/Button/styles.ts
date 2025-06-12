import styled from "styled-components";

export const StyledButton = styled.button<{
  bgcolor?: string;
  color?: string;
  width?: string;
  height?: string;
}>`
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 58px;
  border: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 10px 30px;
`;
