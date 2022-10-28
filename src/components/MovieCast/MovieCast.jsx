import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MovieCastItem from 'components/MovieCastItem';
import Box from 'components/Box';

import { getCast } from 'services/moviesApi';

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

  console.log(cast);

  return (
    <section>
      <h1>Starring</h1>
      <Box as="ul" display="flex" flexWrap="wrap">
        {cast.map(person => (
          <MovieCastItem key={person.id} person={person} />
        ))}
      </Box>
    </section>
  );
};

export default MovieCast;
