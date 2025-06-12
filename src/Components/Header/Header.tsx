import React from "react";
import Image from "next/image";
import { HeaderContainer, Nav, NavItem, RightSection } from "./styles";
import { Button } from "../Button";
import logo from "../../assets/logo.png";
import { theme } from "@/styles/theme";

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
        <Button
          bgcolor={theme.corlos.purple200}
          color={theme.corlos.white100}
          title={"Login"}
          width="185px"
          height="70px"
        />
      </RightSection>
    </HeaderContainer>
  );
};
