import React, { useState } from "react";
import Image from "next/image";
import {
  HeaderContainer,
  LogoWrapper,
  Nav,
  RightContent,
  Hamburguer,
  MobileMenu,
  NavButton,
} from "./styles";
import logo from "../../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  "Home",
  "Quem Somos",
  "Serviços",
  "Vídeo",
  "Faq",
  "Clientes",
  "Contato",
];

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
        {navItems.map((item) => (
          <NavButton key={item}>{item}</NavButton>
        ))}
      </Nav>

      <RightContent>
        <Hamburguer onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </Hamburguer>
      </RightContent>

      {isOpen && (
        <MobileMenu>
          {navItems.map((item) => (
            <NavButton key={item}>{item}</NavButton>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
