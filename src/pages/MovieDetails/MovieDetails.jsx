import { useState, useEffect } from 'react';
import { NavLink, useParams, useLocation } from 'react-router-dom';

import Box from 'components/Box';

import { getMovieById, getImg } from 'services/moviesApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    try {
      getMovieById(movieId).then(setMovie);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, tagline, genres, poster_path, release_date, overview } = movie;

  console.log(movie);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <Box as="section">
      <NavLink to={backLinkHref}>Go back</NavLink>
      <Box as="div" display="flex">
        <Box as="div" width="320px">
          <img src={getImg(poster_path)} alt={title} />
        </Box>

        <Box as="div">
          <h2>
            {title} ({release_date})
          </h2>
          <h3>{tagline}</h3>
          <h3>Overview</h3>
          <p>{overview}</p>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
