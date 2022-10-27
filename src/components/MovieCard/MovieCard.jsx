import { NavLink, useLocation } from 'react-router-dom';

import { getImg } from 'services/moviesApi';

import { MovieItem } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const location = useLocation();

  const { id, title, release_date, poster_path } = movie;

  return (
    <MovieItem>
      <NavLink to={`../movies/${id}`} state={{ from: location }}>
        <img src={getImg(poster_path)} alt={title} />
        <h4>{title}</h4>
        <p>{release_date}</p>
      </NavLink>
    </MovieItem>
  );
};

export default MovieCard;
