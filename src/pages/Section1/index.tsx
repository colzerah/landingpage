import React from "react";
import {
  HeroSection,
  LeftSection,
  RightSection,
  LeftH1,
  RightH1,
  StyledSpan,
  InputContainer,
  StyledInput,
} from "./styles";
import bgImage from "@/assets/homeBackground.png";

export const Section1 = () => {
  return (
    <HeroSection $bg={bgImage.src}>
      <LeftSection>
        <LeftH1>Soluções digitais que moldam o futuro</LeftH1>
        <StyledSpan>da sua empresa.</StyledSpan>
        <InputContainer>
          <StyledInput placeholder="Faça uma pergunta" />
        </InputContainer>
      </LeftSection>

      <RightSection>
        <RightH1>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </RightH1>
      </RightSection>
    </HeroSection>
  );
};
