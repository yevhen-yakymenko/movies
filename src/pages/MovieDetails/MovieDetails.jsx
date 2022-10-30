import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';

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

  const {
    title,
    tagline,
    genres,
    poster_path,
    release_date,
    overview,
    vote_average,
    runtime,
  } = movie;

  console.log(movie);
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <Box as="section">
        <NavLink to={backLinkHref}>Go back</NavLink>
        <Box display="flex" justifyContent="space-between">
          <Box width="320px">
            <img src={getImg(poster_path)} alt={title} />
          </Box>

          <Box width="900px">
            <h2>
              {title} ({release_date})
            </h2>
            <Box as="p" display="flex">
              {genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </Box>
            <p>{runtime}</p>
            <p>User score: {Math.round((vote_average / 10) * 100)}%</p>
            <h3>{tagline}</h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <div>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </div>
          </Box>
        </Box>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
