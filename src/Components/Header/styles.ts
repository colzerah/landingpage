import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: white;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #f1fa8c;
    text-decoration: underline;
  }
`;

export const RightSection = styled.div``;
