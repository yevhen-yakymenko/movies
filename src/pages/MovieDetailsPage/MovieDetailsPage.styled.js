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

export const Aside = styled.aside`
  position: sticky;
  top: 0;

  padding-top: 8.25rem;
  width: 2.75rem;
  height: 100vh;
  /* height: calc(100vh - 60px); */
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${p => p.theme.colors.muted};

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    position: sticky;
    flex-shrink: 0;
    width: ${p => p.theme.sizes.aside};
  }
`;

export const GoBackLink = styled(NavLink)`
  position: fixed;
  top: 4.625rem;
  margin: 0 auto;
  padding: 0.5rem 0.5rem;
  display: flex;

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};

  border-radius: 0.25rem;

  transition: color ${p => p.theme.transitions.main};

  :hover,
  :focus-within {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.accent};
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    top: 6rem;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-width: 10rem;
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 1.5rem;
  }
`;

export const LinkIcon = styled.span`
  display: flex;
  font-size: 1.5rem;
`;

export const LinkText = styled.span`
  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.pc} - 0.0375rem)) {
    display: none;
  }
`;

export const MovieDetails = styled.article`
  max-width: 70.625rem;
  padding: 4.625rem 0 0.625rem 0.625rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  overflow-x: clip;

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    padding: 6rem 0 2rem 2rem;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

export const MoviePoster = styled.div`
  flex: 1 1;
  min-width: 18.75rem;
`;

export const MovieDescription = styled.div`
  flex: 2 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  & h1 {
    font-size: 2rem;
  }
`;

export const MovieAddInfo = styled.div``;

export const LinksList = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;

  border: 1px solid ${p => p.theme.colors.secondary};
  border-bottom: none;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;

  overflow: hidden;
`;

export const StyledLink = styled(NavLink)`
  padding: 1rem 1rem 1rem 1rem;
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

export const AddInfo = styled.div`
  padding: 0.5rem;
  border: 0.0625rem solid ${p => p.theme.colors.secondary};
  border-radius: 0.75rem;
  border-top-left-radius: 0;

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    padding: 1rem;
  }
`;
