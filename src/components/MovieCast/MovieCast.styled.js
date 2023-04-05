import styled from 'styled-components';

export const CastContainer = styled.div`
  flex: 0 1 100%;
  max-width: 100%;

  & h2 {
    margin-bottom: 16px;
    font-size: 28px;
  }
`;

export const CastList = styled.ul`
  max-width: 100%;
  display: flex;
  gap: 16px;

  overflow-x: scroll;

  ::-webkit-scrollbar {
    margin-top: 16px;
    width: 5px;
    height: 8px;
    background-color: #aaa;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.colors.muted};
    border-radius: 4px;
  }
`;
