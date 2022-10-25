import MoviesList from 'components/MoviesList';
import Box from 'components/Box';
// import { MoviesContainer } from './MoviesBox.styled';

const MoviesBox = ({ movies, hideBtn, loadMore, children }) => {
  return (
    <Box width="1280px" as="section">
      {children}

      <MoviesList movies={movies} />

      {movies.length > 0 && hideBtn > 0 && (
        <button type="button" onClick={() => loadMore()}>
          Load more
        </button>
      )}
    </Box>
  );
};

export default MoviesBox;
