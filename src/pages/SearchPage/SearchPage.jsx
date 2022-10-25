import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesBox from 'components/MoviesBox';
import SearchBox from 'components/SearchBox';

import { getMovies } from 'services/moviesApi';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const { results, total_pages } = await getMovies(request, page);
        setMovies(prevMovies => [...prevMovies, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        console.log(error);
      }
    };

    const serchRequets = searchParams.get('request');
    console.log(serchRequets);

    if (serchRequets) {
      setRequest(serchRequets);
    }

    if (!request) {
      return;
    }

    searchMovies();
  }, [page, request, searchParams]);

  const onSearchMovie = request => {
    setMovies([]);
    setPage(1);
    setRequest(request);
    setSearchParams({ request });
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  let onLastPage = totalPages - page;

  return (
    <MoviesBox movies={movies} hideBtn={onLastPage} loadMore={onLoadMore}>
      <SearchBox onSubmit={onSearchMovie} />
    </MoviesBox>
  );
};

export default SearchPage;
