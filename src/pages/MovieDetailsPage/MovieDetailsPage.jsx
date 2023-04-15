import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';

import {
  MovieWrapper,
  MovieContainer,
  Aside,
  MovieDetails,
  GoBackLink,
  LinkIcon,
  LinkText,
  MovieInfo,
  MoviePoster,
  MovieDescription,
  MovieAddInfo,
  LinksList,
  StyledLink,
  AddInfo,
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

  const {
    title,
    genres,
    poster_path,
    release_date,
    overview,
    vote_average,
    vote_count,
    runtime,
  } = movie;

  const backLinkHref = location.state?.from ?? '/';
  const movieReleaseDate = release_date.split('-').reverse().join('-');
  const movieGenres = genres.map(({ name }) => name).join(', ');
  const movieRuntime = `${parseInt(runtime / 60)}h ${runtime % 60}min`;
  const movieRating = Math.round(vote_average * 10) / 10;

  return (
    <MovieWrapper>
      <MovieContainer>
        <Aside>
          <GoBackLink to={backLinkHref}>
            <LinkIcon>
              <TiArrowBack />
            </LinkIcon>
            <LinkText>Go back</LinkText>
          </GoBackLink>
        </Aside>

        <MovieDetails>
          <MovieInfo>
            <MoviePoster>
              <img src={getImg(poster_path)} alt={title} />
            </MoviePoster>

            <MovieDescription>
              <h1>{title}</h1>
              <p>
                <span>Genre:</span> {movieGenres}
              </p>
              <p>
                <span>Release date:</span> {movieReleaseDate}
              </p>
              <p>
                <span>Runtime:</span> {runtime} min ({movieRuntime})
              </p>
              <p>
                <span>Rating:</span> {movieRating}/10 ({vote_count})
              </p>
              <div>
                <h3>Overview:</h3>
                <p>{overview}</p>
              </div>
            </MovieDescription>
          </MovieInfo>

          <MovieAddInfo>
            <LinksList>
              <li>
                <StyledLink to="cast">Cast</StyledLink>
              </li>
              <li>
                <StyledLink to="reviews">Reviews</StyledLink>
              </li>
            </LinksList>

            <AddInfo>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </AddInfo>
          </MovieAddInfo>
        </MovieDetails>
      </MovieContainer>
    </MovieWrapper>
  );
};

export default MovieDetailsPage;
