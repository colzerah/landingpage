import styled from "styled-components";

export const RoundButton = styled.button`
  width: 93px;
  height: 93px;
  border-radius: 50%;
  border: none;
  margin: 10px;
  float: left;
  background-color: ${({ theme }) => theme.colors.purple200};
`;
