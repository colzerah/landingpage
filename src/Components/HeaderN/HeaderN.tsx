"use client";
import React, { useState } from "react";
import { useMediaQuery } from "usehooks-ts";

import Image from "next/image";
import {
  Container,
  DivLogo,
  NavMenu,
  ButtonNav,
  Content,
  DivMobileMenu,
  DivButtonMenu,
  ButtonHamburguer,
} from "./styles";

// import logo from "../../assets/logo.png";
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

export function HeaderN() {
  const logoBreakpoint = useMediaQuery("(min-width: 800px)");
  const hamburgerBreakpoint = useMediaQuery("(min-width: 590px)");

  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsOpen(!hamburgerBreakpoint);
    }
  }, [hamburgerBreakpoint, isOpen]);

  return (
    <Container>
      <Content>
        {logoBreakpoint && (
          <DivLogo>
            <Image
              src="/assets/logo.png"
              alt="Logo Crafters"
              priority
              width={135}
              height={69}
            />
          </DivLogo>
        )}
        {hamburgerBreakpoint && (
          <NavMenu>
            {navItems.map((item) => (
              <ButtonNav key={item}>{item}</ButtonNav>
            ))}
          </NavMenu>
        )}

        {!hamburgerBreakpoint && (
          <DivButtonMenu>
            <ButtonHamburguer onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </ButtonHamburguer>
          </DivButtonMenu>
        )}

        {isOpen && (
          <DivMobileMenu>
            {navItems.map((item) => (
              <ButtonNav key={item}>{item}</ButtonNav>
            ))}
          </DivMobileMenu>
        )}
      </Content>
    </Container>
  );
}
