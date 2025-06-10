import styled from "styled-components";

export const StyledButton = styled.button<{
  backgroundColor?: string;
  color?: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  cursor: pointer;
  border-radius: 58px;
  width: 185px;
  height: 84px;
  padding: 10px 30px;
`;
