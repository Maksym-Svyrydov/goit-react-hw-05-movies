import { fetchTrendingMovies } from '../API/AxiosAPI';
import { useState, useEffect } from 'react';
import MoviesList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(result => {
      setMovies(result.results);
    });
  }, []);
  return (
    <div class="">
      <h1>Trending movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
