import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '66d85cdc98fdcbda260546142accdb60';
// const PAGE = '1';

export const fetchTrendingMovies = async () => {
  const result = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return result.data;
};

export const fetchMovieBySearch = async query => {
  const result = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return result.data.results;
};
