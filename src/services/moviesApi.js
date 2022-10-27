import axios from 'axios';

const apiKey = 'f6621a4453f011cfb432a7f58c4cc70b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (ref, page) => {
  let moviesData = null;

  switch (ref) {
    case 'day':
    case 'week':
      moviesData = await axios({
        url: `/trending/movie/${ref}?api_key=${apiKey}&page=${page}`,
      });
      break;

    case 'popular':
    case 'top_rated':
    case 'upcoming':
      moviesData = await axios({
        url: `/movie/${ref}?api_key=${apiKey}&page=${page}`,
      });
      break;

    default:
      moviesData = await axios({
        url: `/search/movie?api_key=${apiKey}&query=${ref}&page=${page}`,
      });
      break;
  }
  console.log(moviesData);

  return moviesData.data;
};

export const getMovieById = async movie_id => {
  const movieData = await axios({
    url: `/movie/${movie_id}?api_key=${apiKey}`,
  });

  return movieData.data;
};

export const getGenres = async () => {
  const genresData = await axios({
    url: `/genre/movie/list?api_key=${apiKey}`,
  });

  return genresData;
};

// export const searchMovie = async (query, page) => {
//   const moviesData = await axios({
//     url: `/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
//   });

//   console.log(moviesData);

//   return moviesData;
// };

export const getImg = imgPath =>
  `https://image.tmdb.org/t/p/original${imgPath}`;

// /movie/${movie_id}/credits?api_key=${apiKey}&language=en-US - movie Credits
// /movie/${movie_id}/reviews?api_key=${apiKey}&page=${page} - movie Reviews
