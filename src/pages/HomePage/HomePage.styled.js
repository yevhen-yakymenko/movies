import styled from 'styled-components';

export const PageSection = styled.section`
  width: 100%;
`;

export const SectionContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  position: relative;
  width: 100%;
  display: flex;
`;
