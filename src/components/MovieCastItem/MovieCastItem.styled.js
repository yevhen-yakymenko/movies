import styled from 'styled-components';

export const CastItem = styled.li`
  width: 140px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & h3 {
    font-size: 16px;
  }

  & p {
    font-size: 14px;
    font-style: italic;
  }
`;

export const PhotoBox = styled.div`
  width: 140px;
`;
