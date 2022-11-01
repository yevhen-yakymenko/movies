import { useSearchParams } from 'react-router-dom';

import Box from 'components/Box';
import MoviesBox from 'components/MoviesBox';
import SearchBox from 'components/SearchBox';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchMovie = request => {
    setSearchParams({ request });
  };

  const serchRequets = searchParams.get('request');

  return (
    <Box as="main" display="flex" height="100vh" minWidth="1280px">
      <MoviesBox movieRef={serchRequets}>
        <SearchBox onSubmit={onSearchMovie} />
      </MoviesBox>
    </Box>
  );
};

export default SearchPage;
