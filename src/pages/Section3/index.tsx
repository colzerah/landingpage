import React from "react";
import {
  Container,
  Content,
  DivText,
  HeroContainer,
  StyledH1,
  StyledSpan,
} from "./styles";

export function Section3() {
  return (
    <Container>
      <Content>
        <HeroContainer>
          <DivText>
            <StyledH1>Nossos</StyledH1>
            <StyledSpan>Serviços</StyledSpan>
          </DivText>
        </HeroContainer>
      </Content>
    </Container>
  );
}
