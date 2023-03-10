import ControlsBar from 'components/ControlsBar';
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
          <ControlsBar />
          <MoviesBox movieRef={movieRef} title={title} />
        </SectionWrapper>
      </SectionContainer>
    </PageSection>
  );
};

export default HomePage;
