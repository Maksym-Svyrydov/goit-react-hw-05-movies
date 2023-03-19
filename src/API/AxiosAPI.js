import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

const API_KEY = '66d85cdc98fdcbda260546142accdb60';
// const PAGE = '12';

export const fetchGallery = async (query, page) => {
  const { data } = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${}`
  );
  return data;
};
