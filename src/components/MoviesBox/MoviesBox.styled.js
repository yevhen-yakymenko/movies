import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${p => p.theme.colors.background};
  padding: 40px 24px;
  overflow-y: scroll;
`;
