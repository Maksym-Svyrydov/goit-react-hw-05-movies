import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../components/SharedLayuot';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" />
        <Route path="movies" element={<Movies />} />
        <Route path="*" />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="*" />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
