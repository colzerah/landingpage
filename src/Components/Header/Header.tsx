import React, { useState } from "react";
import Image from "next/image";
import {
  HeaderContainer,
  LogoWrapper,
  Nav,
  NavItem,
  RightContent,
  Hamburguer,
  MobileMenu,
} from "./styles";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Image
          src={logo}
          alt="Logo Crafters"
          priority={true}
          width={135}
          height={69}
        />
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

      <RightContent>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </Hamburguer>
      </RightContent>

      {isOpen && (
        <MobileMenu>
          <NavItem>Home</NavItem>
          <NavItem>Quem Somos</NavItem>
          <NavItem>Serviços</NavItem>
          <NavItem>Vídeo</NavItem>
          <NavItem>Faq</NavItem>
          <NavItem>Clientes</NavItem>
          <NavItem>Contato</NavItem>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
