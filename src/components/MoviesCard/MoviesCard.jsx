import { useLocation } from 'react-router-dom';

import { getImg } from 'services/moviesApi';

import {
  MovieItem,
  StyledLink,
  CardTitle,
  CardText,
} from './MoviesCard.styled';

const MoviesCard = ({ movie, genres }) => {
  const location = useLocation();

  const { id, title, release_date, poster_path, genre_ids } = movie;

  const movieGenres = genres
    .filter(({ id }) => genre_ids.includes(id))
    .map(genre => genre.name);

  const movieYear = release_date.slice(0, 4);

  return (
    <MovieItem>
      <StyledLink to={`../movies/${id}`} state={{ from: location }}>
        <img src={getImg(poster_path)} alt={title} />
        <CardTitle>
          {title} ({movieYear})
        </CardTitle>
        <CardText>{movieGenres.join(', ')}</CardText>
      </StyledLink>
    </MovieItem>
  );
};

export default MoviesCard;
