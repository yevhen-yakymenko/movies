import { useLocation } from 'react-router-dom';

import { getImg } from 'services/moviesApi';

import { MovieItem, StyledLink, CardTitle, CardText } from './MovieCard.styled';

const MovieCard = ({ movie, genres }) => {
  const location = useLocation();

  const { id, title, release_date, poster_path, genre_ids } = movie;

  const movieGenres = genres
    .filter(({ id }) => genre_ids.includes(id))
    .map(genre => genre.name);

  return (
    <MovieItem>
      <StyledLink to={`../movies/${id}`} state={{ from: location }}>
        <img src={getImg(poster_path)} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardText>{movieGenres.join(', ')}</CardText>
        <CardText>{release_date}</CardText>
      </StyledLink>
    </MovieItem>
  );
};

export default MovieCard;
