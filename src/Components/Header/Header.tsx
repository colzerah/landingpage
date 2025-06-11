import React from "react";
import Image from "next/image";
import { HeaderContainer, Nav, NavItem, RightSection } from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <Image
        src={logo}
        alt="Logo Crafters"
        priority={true}
        width={135}
        height={69}
      />

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
        <Button $bgcolor="#8648DF" color="white" title={"Login"} />
      </RightSection>
    </HeaderContainer>
  );
};
