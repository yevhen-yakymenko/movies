import ControlsBar from 'components/ControlsBar';
import MoviesBox from 'components/MoviesBox';
import Box from 'components/Box';

import { PageTitle } from './HomePage.styled';

const HomePage = ({ title, movieRef }) => {
  return (
    <Box as="main" display="flex" height="100vh" pt="64px">
      <ControlsBar />
      <MoviesBox movieRef={movieRef}>
        <PageTitle>{title}</PageTitle>
      </MoviesBox>
    </Box>
  );
};

export default HomePage;
