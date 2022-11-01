import axios from 'axios';

const apiKey = 'f6621a4453f011cfb432a7f58c4cc70b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (ref, page) => {
  let movies = null;

  switch (ref) {
    case 'day':
    case 'week':
      movies = await axios({
        url: `/trending/movie/${ref}?api_key=${apiKey}&page=${page}`,
      });
      break;

    case 'popular':
    case 'top_rated':
    case 'upcoming':
      movies = await axios({
        url: `/movie/${ref}?api_key=${apiKey}&page=${page}`,
      });
      break;

    default:
      movies = await axios({
        url: `/search/movie?api_key=${apiKey}&query=${ref}&page=${page}`,
      });
      break;
  }

  return movies.data;
};

export const getMovieById = async movieId => {
  const movie = await axios({
    url: `/movie/${movieId}?api_key=${apiKey}`,
  });

  return movie.data;
};

export const getCast = async movieId => {
  const castData = await axios({
    url: `/movie/${movieId}/credits?api_key=${apiKey}`,
  });

  return castData.data.cast;
};

export const getReviews = async (movieId, page = 1) => {
  const reviews = await axios({
    url: `/movie/${movieId}/reviews?api_key=${apiKey}&page=${page}`,
  });

  return reviews.data;
};

export const getGenres = async () => {
  const genres = await axios({
    url: `/genre/movie/list?api_key=${apiKey}`,
  });

  return genres.data;
};

export const getImg = imgPath =>
  `https://image.tmdb.org/t/p/original${imgPath}`;
