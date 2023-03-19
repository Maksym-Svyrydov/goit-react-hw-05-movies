import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '66d85cdc98fdcbda260546142accdb60';
// const PAGE = '1';

export const fetchTrendingMovies = async () => {
  const result = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return result.data;
};
