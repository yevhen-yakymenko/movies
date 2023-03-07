import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';

import Box from 'components/Box';

import {
  MovieContainer,
  GoBackLink,
  IconBack,
  MovieInfo,
} from './MovieDetailsPage.styled';

import { getMovieById, getImg } from 'services/moviesApi';

const MovieDetailsPage = () => {
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

  console.log(movie);

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

  const backLinkHref = location.state?.from ?? '/';
  const MovieGenres = genres.map(({ name }) => name).join(', ');
  const MovieScore = Math.round((vote_average / 10) * 100);

  return (
    <MovieContainer>
      <Box>
        <GoBackLink to={backLinkHref}>
          <IconBack size="24px" /> Go back
        </GoBackLink>
        <MovieInfo>
          <Box width="320px">
            <img src={getImg(poster_path)} alt={title} />
          </Box>

          <Box width="900px">
            <h2>
              {title} ({release_date})
            </h2>
            <p>{MovieGenres}</p>
            <p>{runtime} min</p>
            <p>User score: {MovieScore}%</p>
            <h4>{tagline}</h4>
            <h3>Overview</h3>
            <p>{overview}</p>
            <div>
              <NavLink to="cast">Cast</NavLink>
              <NavLink to="reviews">Reviews</NavLink>
            </div>
          </Box>
        </MovieInfo>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </MovieContainer>
  );
};

export default MovieDetailsPage;
