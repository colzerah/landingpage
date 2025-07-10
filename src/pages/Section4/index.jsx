import React from "react";
import Image from "next/image";
import {
  Container,
  Content,
  DivElipse,
  HeroContainer,
  StyledDiv,
  StyledH1,
  StyledSpan,
} from "./styles";
import bgMap from "@/assets/section4/Map.svg";
import Elipses from "@/assets/section4/Elipses.svg";
import dockerLogo from "@/assets/section4/dockerImg.svg";
import nodeLogo from "@/assets/section4/nodeImg.svg";
import mongoLogo from "@/assets/section4/mongoImg.svg";
import postgreLogo from "@/assets/section4/postgreImg.svg";
import reactLogo from "@/assets/section4/reactImg.svg";
import vueLogo from "@/assets/section4/vueImg.svg";
import { Logo } from "@/Components/Logo";

export function Section4() {
  return (
    <Container>
      <Content>
        <HeroContainer $bg={bgMap.src}>
          <DivElipse $bg={Elipses.src}>
            <Logo image={reactLogo} angle={203} radius={505} />
            <Logo image={postgreLogo} angle={245} radius={330} />
            <Logo image={dockerLogo} angle={320} radius={380} />
            <Logo image={mongoLogo} angle={370} radius={460} />
            <Logo image={vueLogo} angle={435} radius={245} />
            <Logo image={nodeLogo} angle={165} radius={480} />

            <StyledDiv>
              <StyledH1>
                Desenvolvendo soluções <StyledSpan>inteligentes</StyledSpan>
              </StyledH1>
            </StyledDiv>
          </DivElipse>
        </HeroContainer>
      </Content>
    </Container>
  );
}
