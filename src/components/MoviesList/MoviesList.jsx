import MovieCard from 'components/MovieCard';

import { List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </List>
  );
};

export default MoviesList;
