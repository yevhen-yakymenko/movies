import styled from 'styled-components';

export const CastItem = styled.li`
  width: 8.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & h3 {
    font-size: 1rem;
  }

  & p {
    font-size: 0.875rem;
    font-style: italic;
  }
`;

export const PhotoBox = styled.div`
  width: 8.75rem;
`;
