import { getMoviePoster } from 'services/moviesApi';

import { MovieItem } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path } = movie;

  return (
    <MovieItem>
      <img src={getMoviePoster(poster_path)} alt={title} />
      <h4>{title}</h4>
      <p>{release_date}</p>
    </MovieItem>
  );
};

export default MovieCard;
