import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieItem = styled.li`
  flex-basis: calc((100% - 80px) / 6);
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${p => p.theme.colors.white};

  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const StyledLink = styled(NavLink)`
  color: inherit;
`;

export const CardTitle = styled.h4`
  font-family: ${p => p.theme.fonts.heading};
`;

export const CardText = styled.p``;
