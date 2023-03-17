import AsideMenu from 'components/AsideMenu';
import MoviesBox from 'components/MoviesBox';

import {
  PageSection,
  SectionContainer,
  SectionWrapper,
} from './HomePage.styled';

const HomePage = ({ title, movieRef }) => {
  return (
    <PageSection>
      <SectionContainer>
        <SectionWrapper>
          <AsideMenu />
          <MoviesBox movieRef={movieRef} title={title} />
        </SectionWrapper>
      </SectionContainer>
    </PageSection>
  );
};

export default HomePage;
