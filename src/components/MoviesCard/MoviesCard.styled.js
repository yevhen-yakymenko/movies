import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  /* max-width: 400px; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: ${p => p.theme.colors.text};

  transition: color ${p => p.theme.transitions.main};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLink = styled(NavLink)`
  color: inherit;

  & > img {
    min-height: 100px;

    @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    }

    @media screen and (min-width: ${p => p.theme.breakpoints.pc}) {
      /* min-height: 300px; */
    }
  }
`;

export const CardTitle = styled.h4`
  font-size: ${p => p.theme.fontSizes[4]};
  font-family: ${p => p.theme.fonts.heading};
  padding: 0.375rem 0;
`;

export const CardText = styled.p`
  font-size: ${p => p.theme.fontSizes[2]};
  font-style: italic;
  padding: 0.125rem 0;
`;
