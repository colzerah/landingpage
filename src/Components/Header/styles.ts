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

  @media (max-width: 1224px) {
    padding: 20px 40px;
    justify-content: center;
    display: flex;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;

  @media (max-width: 1224px) {
    order: 2;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex: 8;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1224px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 17px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow100};
    text-decoration: underline;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;

  @media (max-width: 1224px) {
    order: 3;
    display: flex;
    flex: 1;
    justify-content: end;
    align-items: center;
  }
`;

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: 1224px) {
    display: flex;
    flex: 1;
    order: 1;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    left: 40px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white100};
    z-index: 15;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 203px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px 40px;
  z-index: 9;

  ${NavItem} {
    font-size: 18px;
  }
`;
