import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const Aside = styled.aside`
  position: sticky;
  top: 0;
  padding-top: 7.5rem;
  padding-bottom: 1.5rem;
  height: 100vh;
  display: block;

  background-color: ${p => p.theme.colors.muted};
`;

export const Controls = styled.nav`
  width: ${p => p.theme.sizes.aside};

  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px 16px 40px;
  color: ${p => p.theme.colors.text};

  transition: color ${p => p.theme.transitions.main},
    background-color ${p => p.theme.transitions.main};

  &.active {
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.secondary};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;

export const ArrowRightIcon = styled(HiOutlineArrowNarrowRight)`
  display: none;

  ${StyledLink}.active & {
    color: #535a5f;
    display: block;
  }
`;
