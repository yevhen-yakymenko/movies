import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { TiArrowBack } from 'react-icons/ti';

export const MovieContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 64px;
  background-color: ${p => p.theme.colors.background};
`;

export const IconBack = styled(TiArrowBack)``;

export const GoBackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 160px;
  padding: 8px 24px 8px 12px;
  border-radius: 24px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.secondary};

  :hover {
    font-weight: ${p => p.theme.fontWeights.medium};
    color: ${p => p.theme.colors.accent};
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-top: 32px;
`;
