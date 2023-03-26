import { useState, useEffect } from 'react';

import MoviesCard from 'components/MoviesCard';

import {
  MoviesContainer,
  MoviesTitle,
  MoviesList,
  BtnBox,
  LoadMoreBtn,
} from './MoviesBox.styled';

import { getMovies, getGenres } from 'services/moviesApi';

const MoviesBox = ({ movieRef, title }) => {
  const [movies, setMovies] = useState([]);
  const [ref, setRef] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const { results, total_pages } = await getMovies(ref, page);
        setMovies(prevMovies => [...prevMovies, ...results]);
        console.log(results);
        setTotalPages(total_pages);
        const { genres } = await getGenres();
        setGenres(genres);
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

  let lastPage = totalPages - page;

  return (
    <MoviesContainer>
      {title && <MoviesTitle>{title}</MoviesTitle>}

      <MoviesList>
        {movies.map(movie => (
          <MoviesCard key={movie.id} movie={movie} genres={genres} />
        ))}
        <BtnBox>
          {movies.length > 0 && lastPage > 0 && (
            <LoadMoreBtn type="button" onClick={() => onLoadMore()}>
              Load more
            </LoadMoreBtn>
          )}
        </BtnBox>
      </MoviesList>
    </MoviesContainer>
  );
};

export default MoviesBox;
