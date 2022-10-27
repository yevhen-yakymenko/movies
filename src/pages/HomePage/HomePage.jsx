import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import MoviesBox from 'components/MoviesBox';

import { getMovies } from 'services/moviesApi';

const HomePage = ({ pageTitle, movieRef }) => {
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

    if (ref !== movieRef) {
      setMovies([]);
      setRef(movieRef);
      setPage(1);
      return;
    }

    searchMovies();
  }, [movieRef, page, ref]);

  const onLoadMore = hideBtn => {
    setPage(prevPage => prevPage + 1);
    console.log(hideBtn);
  };

  let onLastPage = totalPages - page;

  return (
    <>
      <main>
        <MoviesBox movies={movies} hideBtn={onLastPage} loadMore={onLoadMore}>
          <h1>{pageTitle}</h1>
        </MoviesBox>
      </main>
      <Outlet />
    </>
  );
};

export default HomePage;
