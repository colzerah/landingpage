import React from "react";
import Image from "next/image";
import { RoundButton } from "./styles";
import downarrow from "@/assets/Icons/downarrow.png";

export default function DiscoverButton() {
  return (
    <RoundButton>
      <Image src={downarrow} alt="seta para baixo" />
    </RoundButton>
  );
}
