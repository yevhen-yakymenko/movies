import styled from 'styled-components';

export const PageSection = styled.section`
  width: 100%;

  background-color: ${p => p.theme.colors.background};
`;

export const SectionContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  width: 100%;
`;

export const SectionWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.tablet} - 0.0375rem)) {
    overflow-y: hidden;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.mobile}) {
    display: flex;
  }
`;
