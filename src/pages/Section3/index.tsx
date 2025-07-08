import React from "react";
import {
  CardDiv,
  Container,
  Content,
  DivText,
  HeroContainer,
  StyledH1,
  StyledSpan,
} from "./styles";
import Image from "next/image";
import { ServiceCard } from "@/Components/ServiceCard";

const services = [
  {
    title: "",
    backgroundImage: "/assets/section3/UiIcon.svg",
    icon: "Apps Nativos Android e IOS",
  },
  {
    title: "Chatbot Integrado com IA",
    backgroundImage: "",
    icon: (
      <Image
        src="/assets/section3/RobotIcon.svg"
        alt="Icone Robô"
        width={112}
        height={112}
      />
    ),
  },
  {
    title: "API de alta performance",
    backgroundImage: "",
    icon: (
      <Image
        src="/assets/section3/ApiIcon.svg"
        alt="Icone Api"
        width={112}
        height={112}
      />
    ),
  },
  {
    title: "Estrutura de banco de dados",
    backgroundImage: "",
    icon: (
      <Image
        src="/assets/section3/DataIcon.svg"
        alt="Icone Dev"
        width={112}
        height={112}
      />
    ),
  },
];

export function Section3() {
  return (
    <Container>
      <Content>
        <HeroContainer>
          <DivText>
            <StyledH1>Nossos</StyledH1>
            <StyledSpan>Serviços</StyledSpan>
          </DivText>

          <CardDiv>
            {services.map((s, index) => (
              <ServiceCard
                key={index}
                title={s.title}
                backgroundImage={s.backgroundImage}
                icon={s.icon}
              />
            ))}
          </CardDiv>
        </HeroContainer>
      </Content>
    </Container>
  );
}
