import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.lg} 4.8rem;

  background: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.img`
  width: 114px;
  height: 166px;
  align-self: center;
`;

export const Nav = styled.nav`
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.white};
    margin: ${({ theme }) => theme.spacings.lg} 0
      ${({ theme }) => theme.spacings.md} 0;
  }
`;

export const NavMenu = styled.ul``;

export const NavMenuItem = styled.li``;

export const NavMenuLink = styled(NavLink)<NavLinkProps>`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.white};

  &.active {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;
