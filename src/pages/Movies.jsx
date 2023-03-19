import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from '../API/AxiosAPI';
import MoviesList from '../components/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const handleInputSearh = e => {
    setQuery(e.target.value);
  };
  const handleInputSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };
  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    fetchMovieBySearch(query).then(setMovies);
  }, [searchParams]);
  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Fill in film name"
          onChange={handleInputSearh}
          value={query}
        />

        <button type="submit">Search film</button>
      </form>
      <MoviesList movies={movies} />
    </div>
  );
};
export default Movies;
