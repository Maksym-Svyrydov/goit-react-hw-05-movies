import { fetchTrendingMovies } from '../API/AxiosAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMovies().then(result => {
      setMovies(result.results);
    });
  }, []);
  return (
    <div class="" state={{ from: location }}>
      <h1>Trending movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
