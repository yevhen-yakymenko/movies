import styled from 'styled-components';

export const CastList = styled.ul`
  padding-bottom: 1rem;
  max-width: 100%;
  display: flex;
  gap: 1rem;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0.3125rem;
    height: 0.5rem;
    background-color: #aaa;
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.muted};
    border-radius: 0.25rem;
  }
`;
