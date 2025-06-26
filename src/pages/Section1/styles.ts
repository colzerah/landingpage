import styled from "styled-components";

export const Container = styled.section``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const HeroContainer = styled.div<{ $bg: string }>`
  height: 100vh;
  width: 100vw;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(48, 25, 52, 0.6);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

interface LeftContentProps {
  breakpoint: boolean;
}

export const LeftContent = styled.div<LeftContentProps>`
  display: flex;
  flex: 1;
  // align-items: flex-start;
  align-items: ${({ breakpoint }) => {
    if (breakpoint) {
      return "flex-start";
    }
    return "center";
  }};
  flex-direction: column;
  flex-wrap: wrap;
  // margin-left: 150px;
  margin-left: ${({ breakpoint }) => {
    if (breakpoint) {
      return "150px";
    }
    return "0px";
  }};
`;

interface LeftH1Props {
  breakpoint: "xl" | "lg" | "md" | "sm" | "xsm";
}

export const LeftH1 = styled.h1<LeftH1Props>`
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: ${({ breakpoint }) => {
    switch (breakpoint) {
      case "xl":
        return "64px";
      case "lg":
        return "64px";
      case "md":
        return "50px";
      case "sm":
        return "42px";
      case "xsm":
      default:
        return "37px";
    }
  }};
`;

interface InputContainerProps {
  breakpoint: "xl" | "lg" | "md" | "sm" | "xsm";
}

export const InputContainer = styled.div<InputContainerProps>`
  margin-top: 60px;
  display: flex;
  width: ${({ breakpoint }) => {
    switch (breakpoint) {
      case "xl":
        return "630px";
      case "lg":
        return "630px";
      case "md":
        return "500px";
      case "sm":
        return "";
      case "xsm":
      default:
        return "";
    }
  }};
  padding: 10px;
  align-items: center;
  background-color: #2b2b3d;
  border-radius: 999px;
  transform: ${({ breakpoint }) => {
    switch (breakpoint) {
      case "xl":
        return;
      case "lg":
        return "translate(-50px)";
      case "md":
        return "translate(-35px)";
      case "sm":
        return "";
      case "xsm":
      default:
        return "";
    }
  }};
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 25px;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  width: 10px;
  border: none;
  outline: none;
  padding: 8px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 800;
  font-size: 22px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.gray400};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray400};
  }
`;

interface StyledSpanProps {
  breakpoint: "xl" | "lg" | "md" | "sm" | "xsm";
}

export const StyledSpan = styled.span<StyledSpanProps>`
  color: ${({ theme }) => theme.colors.purple200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: ${({ breakpoint }) => {
    switch (breakpoint) {
      case "xl":
        return "64px";
      case "lg":
        return "64px";
      case "md":
        return "50px";
      case "sm":
        return "42px";
      case "xsm":
      default:
        return "37px";
    }
  }};
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 406px;
  margin-right: 7%;
  position: relative;
`;

export const Balao1Div = styled.div`
  display: flex;
  transform: translate(-50px, 40px);
`;

export const Balao2Div = styled.div`
  display: flex;
  transform: translateX(50px);
`;
