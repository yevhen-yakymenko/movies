import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  padding-top: 4rem;
  padding-bottom: 1.5rem;
  height: 100vh;
  display: block;

  background-color: ${p => p.theme.colors.muted};

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    /* left: 0; */

    transform: translateX(calc(-100% + 44px));
    /* transform: translateX(-100%); */

    transition: transform ${p => p.theme.transitions.main};

    &:hover {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    position: sticky;
  }
`;

export const Controls = styled.nav`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  /* padding-left: 0.25rem; */
  width: ${p => p.theme.sizes.aside};

  height: 100%;
  display: flex;
  flex-direction: column;

  overflow-y: auto;

  /* padding-top: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  } */
`;

export const MenuItem = styled.li`
  position: relative;
  padding-left: 0.25rem;

  max-width: ${p => p.theme.sizes.aside};
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  max-width: ${p => p.theme.sizes.aside};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 1.25rem;
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

export const LinkIcon = styled.span`
  display: flex;
  justify-content: center;

  color: #535a5f;
  opacity: 0;

  pointer-events: none;
  transition: opacity ${p => p.theme.transitions.main};

  ${StyledLink}.active & {
    opacity: 1;
  }
`;
