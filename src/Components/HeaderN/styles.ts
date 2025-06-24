import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  background: linear-gradient(rgba(137, 119, 162, 0.8), rgba(68, 71, 90, 0));
  height: 200px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 40px;
`;

export const DivLogo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex: 8;
  justify-content: center;
  gap: 20px;
`;

export const ButtonNav = styled.button`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white100};
  background-color: transparent;
  border: none;
  text-align: center;
  padding-bottom: 4px;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow100};
    border-bottom: 2px solid;
  }
`;

export const ButtonHamburguer = styled.button`
  /* display: none; */
  display: flex;
  flex: 1;
  /* align-items: center; */
  /* position: absolute; */
  /* right: 160px; */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white100};
  background-color: transparent;
  border: none;
  z-index: 9;
`;

export const DivButtonMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const DivMobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 145px;
  background-color: ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 40px 40px;
  align-items: flex-start;
`;
