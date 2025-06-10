import React from "react";
import Image from "next/image";
import {
  HeaderContainer,
  LogoWrapper,
  Nav,
  NavItem,
  RightSection,
} from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Image src={logo} alt="Logo Crafters" width={120} height={40} />
      </LogoWrapper>

      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Quem Somos</NavItem>
        <NavItem>Serviços</NavItem>
        <NavItem>Vídeo</NavItem>
        <NavItem>Faq</NavItem>
        <NavItem>Clientes</NavItem>
        <NavItem>Contato</NavItem>
      </Nav>

      <RightSection>
        <Button backgroundColor="#8648DF" color="white" title={"Login"} />
      </RightSection>
    </HeaderContainer>
  );
};
