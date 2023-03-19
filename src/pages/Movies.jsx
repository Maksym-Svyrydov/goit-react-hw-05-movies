import { useEffect } from 'react';
import SearchBox from 'components/Search';
import MoviesList from '../components/MovieList';
// import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('[]');
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {});
  return (
    <div class="">
      <SearchBox />
      <MoviesList />
    </div>
  );
};
export default Movies;
