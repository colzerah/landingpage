import React from "react";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
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
  Container,
  Content,
} from "./styles";
import bgImage from "@/assets/homeBackground.png";
import serachIcon from "../../assets/Icons/search.png";
import { Button } from "@/Components/Button";
import balao1 from "@/assets/baloes/balao1.png";
import balao2 from "@/assets/baloes/balao2.png";
import { HeaderN } from "@/Components/HeaderN/HeaderN";
import { useBreakpoint } from "@/hooks/useBreakpoint";

export function Section1() {
  const isXLarge = useMediaQuery("(min-width: 1360px)");

  const breakpoint = useBreakpoint();

  const breakpointButton = () => {
    switch (breakpoint) {
      case "md":
        return "185px";
      case "sm":
        return "auto";
      case "xsm":
        return "120px";
      default:
        return "185px";
    }
  };

  const breakpointHeightButton = () => {
    switch (breakpoint) {
      case "md":
        return "65px";
      case "sm":
        return "60px";
      case "xsm":
        return "55px";
      default:
        return "70px";
    }
  };

  return (
    <Container>
      <Content>
        <HeroContainer $bg={bgImage.src}>
          <HeaderN />
          <LeftContent breakpoint={breakpoint}>
            <LeftH1 breakpoint={breakpoint}>
              Soluções digitais <br /> que moldam o futuro <br />
              <StyledSpan breakpoint={breakpoint}>da sua empresa.</StyledSpan>
            </LeftH1>
            <InputContainer breakpoint={breakpoint}>
              <Icon src={serachIcon.src} alt="Lupa" breakpoint={breakpoint} />
              <StyledInput
                placeholder="Faça uma pergunta"
                breakpoint={breakpoint}
              />
              <Button
                title={"Enviar"}
                width={breakpointButton()}
                height={breakpointHeightButton()}
                colorScheme="secondary"
                fontScheme="secondary"
                fontSize="22px"
                fontWeight={500}
              />
            </InputContainer>
          </LeftContent>

          {isXLarge && (
            <RightContent>
              <Balao1Div>
                <Image src={balao1} alt="balao bem vindo" />
              </Balao1Div>

              <Balao2Div>
                <Image src={balao2} alt="balao message" />
              </Balao2Div>
            </RightContent>
          )}
        </HeroContainer>
      </Content>
    </Container>
  );
}
