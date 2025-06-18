import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.gray300};
  /* background: linear-gradient(
    145deg,
    #21232c 30%,
    rgba(189, 147, 249, 0.5) 60%,
    rgb(45, 46, 51)
  ); */
`;

export const LeftSection = styled.div`
  position: relative;
  width: 609px;
  height: 406px;
`;

export const RobotDiv = styled.div`
  position: absolute;
  top: -140px;
  left: -173px;
  overflow: hidden;
  z-index: 3;
`;

export const WavesDiv = styled.div`
  position: absolute;
  top: -75px;
  right: 0px;
  overflow: hidden;
  z-index: 2;
`;

export const ConectionsDiv = styled.div`
  position: absolute;
  top: -140px;
  left: -173px;
  overflow: hidden;
  z-index: 1;
`;

export const RightSection = styled.div`
  display: flex;
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
  width: 506px;
  height: 216px;
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
