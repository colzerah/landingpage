import styled from "styled-components";

export const HeroSection = styled.section<{ $bg: string }>`
  height: 100vh;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentWrapper = styled.div`
  text-align: center;
  color: white;
  backdrop-filter: brightness(0.8);
`;
