import React from "react";
import { DivWrapper } from "./styles";
import Image, { StaticImageData } from "next/image";

interface LogoProps {
  image: StaticImageData;
  angle: number; // ângulo da elipse
  radius?: number; // raio do círculo/elipse base
}

export function Logo({ image, angle, radius = 280 }: LogoProps) {
  return (
    <DivWrapper $angle={angle} $radius={radius}>
      <Image src={image} alt="Logo" width={70} height={70} />
    </DivWrapper>
  );
}
