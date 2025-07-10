import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const HeroContainer = styled.div<{ $bg: string }>`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray200};
  background-image: url(${({ $bg }) => $bg});
  background-repeat: no-repeat;
  background-position: center center;
  align-items: center;
`;

export const DivElipse = styled.div<{ $bg: string }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 639px;
  background-image: url(${({ $bg }) => $bg});
  background-repeat: no-repeat;
  background-position: center;
  pointer-events: none;
`;

export const StyledDiv = styled.div`
  display: flex;
  width: 625px;
  height: 280px;
`;

export const StyledH1 = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 80px;
`;

export const StyledSpan = styled.span`
  text-align: center;
  color: ${({ theme }) => theme.colors.yellow100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  font-size: 80px;
`;

export const IconContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const IconWrapper = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg,
  img {
    width: 100%;
    height: 100%;
  }
`;
