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
  font-size: 17px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white100};
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow100};
    text-decoration: underline;
  }
`;

export const RightSection = styled.div``;
