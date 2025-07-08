import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray300};
  align-items: center;
  justify-content: center;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.neutral50};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 64px;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  font-size: 64px;
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
