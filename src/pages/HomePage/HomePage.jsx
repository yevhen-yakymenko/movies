import ControlsBar from 'components/ControlsBar';
import MoviesBox from 'components/MoviesBox';

import { PageSection, SectionContainer } from './HomePage.styled';

const HomePage = ({ title, movieRef }) => {
  return (
    <PageSection>
      <SectionContainer>
        <ControlsBar />
        <MoviesBox movieRef={movieRef} title={title} />
      </SectionContainer>
    </PageSection>
  );
};

export default HomePage;
