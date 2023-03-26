import AsideMenu from 'components/AsideMenu';
import MoviesBox from 'components/MoviesBox';

import {
  PageSection,
  SectionContainer,
  MoviesWrapper,
} from './HomePage.styled';

const HomePage = ({ title, movieRef }) => {
  return (
    <PageSection>
      <SectionContainer>
        <AsideMenu />
        <MoviesWrapper>
          <MoviesBox movieRef={movieRef} title={title} />
        </MoviesWrapper>
      </SectionContainer>
    </PageSection>
  );
};

export default HomePage;
