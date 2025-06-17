import styled from "styled-components";

export const HeroSection = styled.section<{ $bg: string }>`
  height: 100vh;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

export const LeftSection = styled.div``;

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
  color: ${({ theme }) => theme.colors.gray300};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.purple200};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 800;
  font-size: 64px;
`;

export const RightSection = styled.div`
  position: relative;
  width: 609px;
  height: 406px;
`;

export const Balao1Div = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
`;

export const Balao2Div = styled.div`
  position: absolute;
  bottom: -20px;
  right: 0;
`;

export const LeftVector = styled.div`
  position: absolute;
  left: 0;
  bottom: 90px;
`;

export const RightVector = styled.div`
  position: absolute;
  right: -50px;
  top: 65px;
`;
