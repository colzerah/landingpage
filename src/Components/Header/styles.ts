import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 120px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 203px;
  z-index: 10;
  background: linear-gradient(rgba(189, 147, 249, 0.4), rgba(68, 71, 90, 0));

  @media (max-width: 1200px) {
    padding: 20px 40px;
    justify-content: center;
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media (max-width: 1429px) {
    flex: 1;
    justify-content: center;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 8;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const NavButton = styled.button`
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

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1200px) {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Hamburguer = styled.button`
  display: none;

  @media (max-width: 1200px) {
    display: flex;
    flex: 1;
    align-items: center;
    position: absolute;
    right: 160px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white100};
    background-color: transparent;
    border: none;
    z-index: 9;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 80px;
  right: 145px;
  background-color: ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 40px 40px;
  align-items: flex-start;

  @media (min-width: 1201px) {
    display: none;
  }
`;
