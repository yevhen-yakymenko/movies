import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList';
// import Box from 'components/Box';
import { MoviesContainer } from './MoviesBox.styled';

import { getMovies } from 'services/moviesApi';

const MoviesBox = ({ movieRef, children }) => {
  const [movies, setMovies] = useState([]);
  const [ref, setRef] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const { results, total_pages } = await getMovies(ref, page);
        setMovies(prevMovies => [...prevMovies, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    if (!movieRef) {
      return;
    }

    if (ref !== movieRef) {
      setMovies([]);
      setRef(movieRef);
      setPage(1);
      return;
    }

    searchMovies();
  }, [movieRef, page, ref]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  let onLastPage = totalPages - page;

  return (
    <MoviesContainer>
      {children}

      <MoviesList movies={movies} />

      {movies.length > 0 && onLastPage > 0 && (
        <button type="button" onClick={() => onLoadMore()}>
          Load more
        </button>
      )}
    </MoviesContainer>
  );
};

export default MoviesBox;
