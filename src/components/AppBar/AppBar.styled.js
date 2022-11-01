import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { MdLocalMovies } from 'react-icons/md';

export const MainHeader = styled.header`
  position: absolute;
  width: 100vw;
  background-color: ${p => p.theme.colors.pirmary};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.secondary};
  padding: 16px 8px;
`;

export const LogoLink = styled(NavLink)`
  margin-left: ${p => p.theme.space[2]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[6]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
  color: ${p => p.theme.colors.white};
  text-shadow: 2px 2px 20px #ff0000, 5px 5px 5px #000000;
`;

export const LogoIcon = styled(MdLocalMovies)`
  box-shadow: 2px 2px 20px #ff0000, 5px 5px 5px #000000;
  border: 1px solid ${p => p.theme.colors.pirmary};
  border-radius: 4px;
`;

export const NavigationList = styled.nav`
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(NavLink)`
  :hover {
    text-decoration: underline;
  }
`;
