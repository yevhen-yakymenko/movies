import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieCastItem from 'components/MovieCastItem';
import { getCast } from 'services/moviesApi';

import { CastList } from './MovieCast.styled';

const MovieCast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      getCast(movieId).then(setCast);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <CastList>
      {cast.map(person => (
        <MovieCastItem key={person.id} person={person} />
      ))}
    </CastList>
  );
};

export default MovieCast;
