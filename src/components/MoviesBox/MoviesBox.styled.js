import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding-top: 7rem;
  padding-bottom: 2.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100%;

  background-color: ${p => p.theme.colors.background};
`;

export const MoviesTitle = styled.h1`
  margin-bottom: 2.5rem;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.white};
`;

export const MoviesList = styled.ul`
  margin: 0 auto;
  margin-bottom: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const LoadMoreBtn = styled.button`
  padding: 8px 24px;
  min-width: 160px;

  color: ${p => p.theme.colors.text};
  border: none;
  border-radius: 24px;
  background-color: ${p => p.theme.colors.secondary};

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;
