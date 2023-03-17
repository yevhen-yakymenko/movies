import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.aside`
  position: fixed;
  top: 0;

  padding-top: 4rem;
  width: ${p => p.theme.sizes.aside};
  height: 100vh;
  display: flex;

  background-color: ${p => p.theme.colors.background};

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    transform: translateX(calc(-100% + 44px));

    transition: transform ${p => p.theme.transitions.main};

    &.menu-open {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    position: sticky;
    flex-shrink: 0;
    display: block;
  }
`;

export const AsideBtnControl = styled.button`
  padding: 0;
  width: 2.75rem;
  flex-shrink: 0;

  font-size: 24px;
  color: ${p => p.theme.colors.white};

  background-color: ${p => p.theme.colors.muted};
  border: none;

  transition: color ${p => p.theme.transitions.main};

  &:hover,
  &:focus-within {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: none;
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform ${p => p.theme.transitions.main};

    ${Aside}.menu-open & {
      transform: rotate(-180deg);
    }
  }
`;

export const AsideNav = styled.nav`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
  width: 100%;

  height: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${p => p.theme.colors.muted};

  overflow-y: auto;

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    width: calc(${p => p.theme.sizes.aside} - 44px);

    border-right: 2px solid ${p => p.theme.colors.background};
    opacity: 0;
    pointer-events: none;
    visibility: hidden;

    transition: opacity ${p => p.theme.transitions.main} 100ms;

    ${Aside}.menu-open & {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }
  }
`;

export const MenuItem = styled.li`
  position: relative;
  padding-left: 0.25rem;
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0rem 1rem 1rem;
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

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 1rem 1rem 1rem 1.25rem;
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

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    display: none;
  }
`;
