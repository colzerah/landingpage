import styled from "styled-components";
import { motion } from "framer-motion";

interface CardContainerProps {
  backgroundImage: string;
}

export const CardContainer = styled(motion.div)<CardContainerProps>`
  position: relative;
  width: 305px;
  height: 335px;
  border: 2.5px solid transparent;
  border-radius: 16px; // não pega radius com border-image e border-color não aceita gradient
  border-image: linear-gradient(to bottom, #bd93f9, #666666);
  border-image-slice: 1;
  overflow: hidden;

  ${({ backgroundImage }) =>
    backgroundImage
      ? `
      background-image: url(${backgroundImage});
      background-size: cover;
      background-position: center;
    `
      : `
      background-color: transparente;
    `}

  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.colors.neutral50};
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  justify-content: space-between;
`;

export const IconDiv = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.yellow100};
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  align-items: flex-end;
`;

export const DivButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 30px;
`;
