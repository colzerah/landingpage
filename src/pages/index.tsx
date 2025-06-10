import { Header } from "@/Components/Header/Header";
import bgImage from "@/assets/homeBackground.png";
import { ContentWrapper, HeroSection } from "./styles";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection $bg={bgImage.src}>
        <ContentWrapper>
          <h1>Bem-vindo à nossa Landing Page</h1>
          <p>Texto chamativo aqui...</p>
        </ContentWrapper>
      </HeroSection>
    </>
  );
}
