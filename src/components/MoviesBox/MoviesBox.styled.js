import styled from 'styled-components';

export const MoviesContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 2.5rem;
  /* padding-left: 0.625rem; */
  width: 100%;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-left: 0.9375rem;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    padding-top: 1.5rem;
  }
`;

export const MoviesTitle = styled.h1`
  margin-bottom: 1rem;
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.white};

  @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
    margin-bottom: 1.5rem;
  }
`;

export const MoviesList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > li {
    flex-basis: calc((100% - 1rem) / 2);

    @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
      flex-basis: calc((100% - 2rem) / 3);
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
      flex-basis: calc((100% - 3rem) / 4);
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
      flex-basis: calc((100% - 4rem) / 5);
    }
  }
`;

export const BtnBox = styled.li`
  display: flex;
  align-items: flex-end;
`;

export const LoadMoreBtn = styled.button`
  padding: 0.5rem 1.5rem;
  width: 100%;

  color: ${p => p.theme.colors.text};
  border: none;
  border-radius: 1.5rem;
  background-color: ${p => p.theme.colors.secondary};

  cursor: pointer;

  transition: color ${p => p.theme.transitions.main};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
  }
`;
