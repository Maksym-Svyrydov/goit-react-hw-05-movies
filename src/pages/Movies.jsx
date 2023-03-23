import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieBySearch } from '../API/AxiosAPI';
import MoviesList from '../components/MovieList';
import { Container, Form, Input, Button } from '../pages/Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputSearh = e => {
    setQuery(e.target.value);
  };

  const handleInputSubmit = e => {
    e.preventDefault();
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === {}) {
      return;
    }
    fetchMovieBySearch(query).then(setMovies);
  }, [searchParams]);

  return (
    <Container>
      <Form onSubmit={handleInputSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="Search your film :)"
          onChange={handleInputSearh}
          value={query}
        />

        <Button type="submit">Search film</Button>
      </Form>
      <MoviesList movies={movies} />
    </Container>
  );
};
export default Movies;
