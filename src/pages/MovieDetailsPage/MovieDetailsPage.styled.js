import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.background};
`;

export const MovieContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  width: 100%;
  min-height: calc(100vh - 3.75rem);
  display: flex;
`;

export const MovieDetails = styled.article`
  max-width: 1130px;
  padding: 96px 0 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  overflow-x: clip;
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  width: ${p => p.theme.sizes.aside};
  height: 100vh;
  /* height: calc(100vh - 7.75rem); */
  padding-top: 132px;
  display: flex;
  /* justify-content: center; */

  background-color: ${p => p.theme.colors.muted};

  /* @media screen and (max-width: calc(${p =>
    p.theme.breakpoints.tablet} - 0.0375rem)) {
    transform: translateX(calc(-100% + 2.75rem));

    transition: transform ${p => p.theme.transitions.main};

    &.menu-open {
      transform: translateX(0);
    }
  } */

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    position: sticky;
    flex-shrink: 0;
    display: block;
  }
`;

export const GoBackLink = styled(NavLink)`
  margin: 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-width: 160px;
  padding: 8px 24px 8px 24px;
  border-radius: 24px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};

  transition: color ${p => p.theme.transitions.main};

  :hover {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.accent};
  }
`;

export const LinkIcon = styled.span`
  display: flex;
  font-size: 24px;
`;

export const LinkText = styled.span``;

export const MovieInfo = styled.div`
  display: flex;
  gap: 32px;
`;

export const MoviePoster = styled.div`
  flex: 1 1;
  min-width: 300px;
`;

export const MovieDescription = styled.div`
  flex: 2 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  & h1 {
    font-size: 32px;
  }
`;

export const LinksList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;

  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: 24px;

  overflow: hidden;
`;

export const StyledLink = styled(NavLink)`
  padding: 1rem 0rem 1rem 1rem;
  min-width: 100px;
  display: inline-flex;
  justify-content: center;

  line-height: 1.5;
  color: ${p => p.theme.colors.text};

  transition: background-color ${p => p.theme.transitions.main};

  &.active {
    background-color: ${p => p.theme.colors.secondary};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding: 0.5rem 1rem;
  }
`;
