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
  Icon,
} from "./styles";
import bgImage from "@/assets/homeBackground.png";
import serachIcon from "../../assets/Icons/search.png";
import { Button } from "@/Components/Button";

export const Section1 = () => {
  return (
    <HeroSection $bg={bgImage.src}>
      <LeftSection>
        <LeftH1>
          Soluções digitais <br /> que moldam o futuro
        </LeftH1>
        <StyledSpan>da sua empresa.</StyledSpan>
        <InputContainer>
          <Icon src={serachIcon.src} alt="Lupa" />
          <StyledInput placeholder="Faça uma pergunta" />
          <Button
            title={"Enviar"}
            width="185px"
            height="70px"
            colorScheme="secondary"
          />
        </InputContainer>
      </LeftSection>

      <RightSection>
        <RightH1>Lorem Ipsum</RightH1>
      </RightSection>
    </HeroSection>
  );
};
