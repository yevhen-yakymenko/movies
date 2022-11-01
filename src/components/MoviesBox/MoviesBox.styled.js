import styled from 'styled-components';

export const MoviesContainer = styled.div`
  flex-basis: content;
  background-color: ${p => p.theme.colors.background};
  padding: 40px 16px;
  overflow-y: scroll;
`;
