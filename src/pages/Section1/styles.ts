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

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 150px;
`;

export const LeftH1 = styled.h1`
  color: ${({ theme }) => theme.colors.white100};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: 64px;
`;

export const InputContainer = styled.div`
  margin-top: 60px;
  display: flex;
  width: 630px;
  padding: 10px;
  align-items: center;
  background-color: #2b2b3d;
  border-radius: 999px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 25px;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
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

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: 64px;
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
