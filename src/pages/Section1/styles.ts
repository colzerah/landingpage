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

export const LeftSection = styled.div`
  overflow: hidden;
`;

export const LeftH1 = styled.h1`
  color: white;
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 500px;
  padding: 10px;
  align-items: center;
  background-color: #2b2b3d;
  border-radius: 999px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
`;

export const StyledInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  outline: none;
  padding: 8px;
`;

export const StyledSpan = styled.span`
  color: #8648df;
`;

export const RightSection = styled.div`
  display: flex;
`;

export const RightH1 = styled.h1`
  color: white;
`;
