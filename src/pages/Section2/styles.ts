import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 930px;
  position: relative;
  /* background-color: ${({ theme }) => theme.colors.gray300}; */
  background: linear-gradient(
    145deg,
    rgba(45, 46, 51, 0.99) 35%,
    rgba(117, 96, 150, 0.99) 50%,
    rgba(189, 147, 249, 0.99) 40%,
    rgba(117, 96, 150, 0.99) 50%,
    rgba(45, 46, 51, 0.99) 75%
  );
  overflow: hidden;
`;

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RobotDiv = styled.div`
  display: flex;
  z-index: 2;
`;

export const WavesDiv = styled.div`
  position: absolute;
  left: 450px;
  z-index: 1;
`;

export const ConectionsDiv = styled.div`
  position: absolute;
  z-index: 1;
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const BackgroundText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 800;
  letter-spacing: -1px;
  line-height: 70%;
  font-size: 200px;
  z-index: 0;
  color: #bd93f947;
  /* color: ${({ theme }) => theme.colors.purple200}; */
  position: absolute;
  top: 20%;
  right: -250px;
  opacity: 30%;
  pointer-events: none;
  user-select: none;
`;

export const RightH1 = styled.h1`
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: 64px;
  letter-spacing: 0px;
  line-height: 72px;
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

export const H1Div = styled.div`
  width: 506px;
  height: 216px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: 64px;
`;

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 400;
  font-size: 18px;
  width: 410px;
  line-height: 30px;
  letter-spacing: 0px;
`;

export const ButtonDiv = styled.div``;
