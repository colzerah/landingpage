import styled from "styled-components";

export const DivWrapper = styled.div<{ $angle: number; $radius: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: rotate(${(p) => p.$angle}deg) translate(${(p) => p.$radius}px)
    rotate(-${(p) => p.$angle}deg); // desfaz a rotação para manter o ícone reto
`;
