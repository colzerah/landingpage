import React from "react";
import Image from "next/image";
import {
  HeroContainer,
  LeftContent,
  RightContent,
  LeftH1,
  StyledSpan,
  InputContainer,
  StyledInput,
  Icon,
  Balao1Div,
  Balao2Div,
  LeftVector,
  RightVector,
  Container,
  Content,
} from "./styles";
import bgImage from "@/assets/homeBackground.png";
import serachIcon from "../../assets/Icons/search.png";
import { Button } from "@/Components/Button";
import balao1 from "@/assets/baloes/balao1.png";
import balao2 from "@/assets/baloes/balao2.png";
import leftvector from "@/assets/vetores/leftvector.png";
import rightvector from "@/assets/vetores/reightvector.png";
import { HeaderN } from "@/Components/HeaderN/HeaderN";

export function Section1() {
  return (
    <Container>
      <Content>
        <HeroContainer $bg={bgImage.src}>
          <HeaderN>
            {/* <LeftContent>
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
            fontScheme="secondary"
            fontSize="22px"
            fontWeight={500}
          />
        </InputContainer>
      </LeftContent>

      <RightContent>
        <Balao1Div>
          <Image src={balao1} alt="balao bem vindo" />
        </Balao1Div>
        <LeftVector>
          <Image src={leftvector} alt="vetor pontilhado esquerda" />
        </LeftVector>
        <RightVector>
          <Image src={rightvector} alt="vetor pontilhado direita" />
        </RightVector>
        <Balao2Div>
          <Image src={balao2} alt="balao message" />
        </Balao2Div>
      </RightContent> */}
          </HeaderN>
        </HeroContainer>
      </Content>
    </Container>
  );
}
