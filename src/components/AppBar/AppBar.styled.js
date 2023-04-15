import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MdLocalMovies } from 'react-icons/md';

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;

  background-color: ${p => p.theme.colors.pirmary};

  z-index: 10;
`;

export const HeaderContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  position: relative;
  width: 100%;
  max-height: 4rem;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  min-width: ${p => p.theme.sizes.aside};
  background-color: ${p => p.theme.colors.secondary};

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    margin-right: 3.5rem;
  }
`;

export const LogoLink = styled(NavLink)`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[6]};
  font-weight: ${p => p.theme.fontWeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
  color: ${p => p.theme.colors.text};
  text-transform: uppercase;
  text-shadow: 0.125rem 0.125rem 1.25rem #ff0000,
    0.3125rem 0.3125rem 0.3125rem #000000;
`;

export const LogoIcon = styled(MdLocalMovies)`
  box-shadow: 0.125rem 0.125rem 1.25rem #ff0000,
    0.3125rem 0.3125rem 0.3125rem #000000;
  border: 0.0625rem solid ${p => p.theme.colors.pirmary};
  border-radius: 0.25rem;
`;

export const ToggleMenuBtn = styled.button`
  margin-left: auto;
  padding: ${p => p.theme.space[2]};

  font-size: ${p => p.theme.fontSizes[7]};
  color: ${p => p.theme.colors.text};

  background-color: transparent;
  border: none;

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.btnText};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: none;
  }

  & > span {
    display: flex;
    pointer-events: none;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    position: absolute;
    left: 0;
    top: 4rem;
    padding: 0px 0.625rem;
    height: calc(100vh - 4rem);

    background-color: ${p => p.theme.colors.pirmary};

    transform: translateX(100%);

    transition: transform ${p => p.theme.transitions.main};

    &.menu-open {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const NavigationMenu = styled.nav`
  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    margin: 0 auto;
    padding-top: 2rem;
    display: inline-flex;
    height: max-content;
  }

  & > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3.125rem;

    text-align: center;

    @media screen and (max-width: calc(${p =>
        p.theme.breakpoints.tablet} - 0.0375rem)) {
      margin: 0 auto;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;

  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.text};

  transition: color ${p => p.theme.transitions.main};

  :hover {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    padding: 0.625rem 6.25rem;
    min-width: 16.25rem;
  }
`;
