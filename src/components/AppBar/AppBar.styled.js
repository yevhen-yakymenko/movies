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
  width: 100%;
  max-height: 4rem;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  min-width: ${p => p.theme.sizes.aside};
  background-color: ${p => p.theme.colors.secondary};
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
  text-shadow: 0.125rem 0.125rem 1.25rem #ff0000,
    0.3125rem 0.3125rem 0.3125rem #000000;
`;

export const LogoIcon = styled(MdLocalMovies)`
  box-shadow: 0.125rem 0.125rem 1.25rem #ff0000,
    0.3125rem 0.3125rem 0.3125rem #000000;
  border: 0.0625rem solid ${p => p.theme.colors.pirmary};
  border-radius: 0.25rem;
`;

export const NavigationContainer = styled.div`
  padding: 0 2.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationList = styled.nav`
  width: 12.5rem;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.medium};
  color: ${p => p.theme.colors.text};

  transition: color ${p => p.theme.transitions.main};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
