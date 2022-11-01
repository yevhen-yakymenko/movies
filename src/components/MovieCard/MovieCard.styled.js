import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  flex-basis: calc((100% - 64px) / 5);
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* background-color: ${p => p.theme.colors.muted}; */

  color: ${p => p.theme.colors.white};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
`;

export const CardTitle = styled.h4`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  padding: 6px 0;
`;

export const CardText = styled.p`
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-style: italic;
  padding: 2px 0;
`;
