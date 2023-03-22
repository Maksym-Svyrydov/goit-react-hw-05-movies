import { fetchTrendingMovies } from '../API/AxiosAPI';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MovieList';
import { Titile } from '../components/Sharedlayout.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendingMovies().then(result => {
      setMovies(result.results);
    });
  }, []);
  return (
    <div state={{ from: location }}>
      <Titile>Trending movies</Titile>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
