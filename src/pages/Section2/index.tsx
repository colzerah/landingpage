import React from "react";
import Image from "next/image";
import {
  ConectionsDiv,
  Container,
  Content,
  HeroContainer,
  LeftContent,
  RightH1,
  RightContent,
  RobotDiv,
  StyledP,
  StyledSpan,
  TextDiv,
  H1Div,
  StyledDiv,
  ButtonDiv,
  WavesDiv,
  BackgroundText,
} from "./styles";
import { Button } from "@/Components/Button";
import robot from "@/assets/section2/robot.svg";
import conections from "@/assets/section2/robotconections.png";
import waves from "@/assets/section2/waves.png";

export function Section2() {
  return (
    <Container>
      <Content>
        <HeroContainer>
          <LeftContent>
            <RobotDiv>
              <Image src={robot} alt="Robo" height={803} />
            </RobotDiv>
            <WavesDiv>
              <Image src={waves} alt="ondas" />
            </WavesDiv>
            <ConectionsDiv>
              <Image src={conections} alt="conexoes" />
            </ConectionsDiv>
          </LeftContent>

          <RightContent>
            <BackgroundText>
              Code <br /> Crafters
            </BackgroundText>
            <TextDiv>
              <H1Div>
                <RightH1>
                  Solucionando desafios com <StyledSpan>tecnologia.</StyledSpan>{" "}
                </RightH1>
              </H1Div>
              <StyledDiv>
                <StyledP>
                  Sit amet commodo nulla facilisi nullam vehicula ipsum.
                  Adipiscing elit duis tristique sollicitudin nibh sit. Turpis
                  nunc eget lorem dolor sed viverra ipsum. Proin sed libero enim
                  sed faucibus turpis in eu mi.
                </StyledP>

                <StyledP>
                  Sit amet commodo nulla facilisi nullam vehicula ipsum.
                  Adipiscing elit duis tristique sollicitudin nibh sit. Turpis
                  nunc eget lorem dolor sed viverra ipsum. Proin sed libero enim
                  sed faucibus turpis in eu mi
                </StyledP>
              </StyledDiv>
              <ButtonDiv>
                <Button
                  title={"Fale Conosco"}
                  width={"305px"}
                  height={"84px"}
                  fontSize={"24px"}
                  fontWeight={500}
                  fontScheme="primary"
                  colorScheme="secondary"
                />
              </ButtonDiv>
            </TextDiv>
          </RightContent>
        </HeroContainer>
      </Content>
    </Container>
  );
}
