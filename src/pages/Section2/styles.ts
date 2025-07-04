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
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray300};
  /* background: linear-gradient(
    145deg,
    #21232c 30%,
    rgba(189, 147, 249, 0.5) 60%,
    rgb(45, 46, 51)
  ); */
`;

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const RobotDiv = styled.div`
  display: flex;
`;

// export const WavesDiv = styled.div`
//   position: absolute;
//   top: -75px;
//   right: 570px;
//   overflow: hidden;
//   z-index: 2;
// `;

// export const ConectionsDiv = styled.div`
//   position: absolute;
//   top: -140px;
//   left: -173px;
//   overflow: hidden;
//   z-index: 1;
// `;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
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

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-100px);
`;
