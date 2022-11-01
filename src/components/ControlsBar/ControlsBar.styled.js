import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export const Controls = styled.nav`
  flex-basis: 240px;
  min-width: 240px;
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.muted};
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 8px 16px 40px;
  color: ${p => p.theme.colors.white};

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
