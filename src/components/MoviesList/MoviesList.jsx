import MovieCard from 'components/MovieCard';

import { List } from './MoviesList.styled';

const MoviesList = ({ movies, lastPage, loadMore }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      <li>
        {movies.length > 0 && lastPage > 0 && (
          <button type="button" onClick={() => loadMore()}>
            Load more
          </button>
        )}
      </li>
    </List>
  );
};

export default MoviesList;
