import styled from "styled-components";

export const HeroSection = styled.section<{ $bg: string }>`
  height: 100vh;
  background-image: url(${({ $bg }) => $bg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

// export const Article = styled.article`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   justify-content: center;
// `;

export const LeftSection = styled.div`
  overflow: hidden;
`;

export const LeftH1 = styled.h1`
  color: white;
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 40%;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 1rem;
  border-radius: 999px;
  border: none;
`;

export const StyledSpan = styled.span`
  color: #8648df;
`;

export const RightSection = styled.div`
  display: flex;
`;

export const RightH1 = styled.h1`
  color: white;
`;
