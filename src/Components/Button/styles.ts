import styled from "styled-components";

export const StyledButton = styled.button<{
  $bgcolor?: string;
  color?: string;
}>`
  background-color: ${({ $bgcolor }) => $bgcolor};
  color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 58px;
  border: none;
  width: 185px;
  height: 84px;
  padding: 10px 30px;
`;
