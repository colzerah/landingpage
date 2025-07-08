import React from "react";
import {
  Button,
  CardContainer,
  Content,
  IconDiv,
  Title,
  Container,
  DivButton,
} from "./styles";

interface CardProps {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({
  title,

  backgroundImage,
  icon,
}: CardProps) => {
  return (
    <CardContainer
      whileHover={{ scale: 1.05 }}
      backgroundImage={backgroundImage}
    >
      <Container>
        <Content>
          {icon && <IconDiv>{icon}</IconDiv>}
          <Title>{title}</Title>
          <DivButton>
            <Button>Contratar →</Button>
          </DivButton>
        </Content>
      </Container>
    </CardContainer>
  );
};
