import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from 'components/Layout';

// import MoviesBox from 'components/MoviesBox';
import { GlobalStyle } from 'components/GlobalStyle';

import moviesRefs from 'data/moviesRefs.json';

const HomePage = lazy(() => import('./pages/HomePage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const MovieCast = lazy(() => import('./components/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="tranding-day" />} />

          {moviesRefs.map(({ name, title, ref }) => (
            <Route
              key={name}
              path={name}
              element={<HomePage title={title} movieRef={ref} />}
            />
          ))}

          <Route path="movies" element={<SearchPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.
