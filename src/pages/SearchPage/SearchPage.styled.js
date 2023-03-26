import styled from 'styled-components';

export const PageSection = styled.section`
  background-color: ${p => p.theme.colors.background};
`;

export const SectionContainer = styled.div.attrs(_ => ({
  className: 'container',
}))`
  padding-top: 4rem;
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
`;

export const NavigationBox = styled.div`
  min-width: 15rem;
  background-color: ${p => p.theme.colors.muted};

  @media screen and (max-width: calc(${p =>
      p.theme.breakpoints.pc} - 0.0375rem)) {
    display: none;
  }
`;

export const ContentBox = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`;
