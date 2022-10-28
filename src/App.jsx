import { Route, Routes, Navigate } from 'react-router-dom';

import AppBar from 'components/AppBar';
import HomePage from 'pages/HomePage';
import SearchPage from 'pages/SearchPage';
import MovieDetails from 'pages/MovieDetails';
import MovieCast from 'components/MovieCast';
import MovieReviews from 'components/MovieReviews';
import { GlobalStyle } from 'components/GlobalStyle';

import moviesRefs from 'data/moviesRefs.json';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Navigate to="trandingDay" />} />
          {moviesRefs.map(({ name, title, ref }) => (
            <Route
              key={name}
              path={name}
              element={<HomePage pageTitle={title} movieRef={ref} />}
            />
          ))}
          <Route path="movies" element={<SearchPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            {/* <Route index element={<Navigate to="cast" />} /> */}
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
