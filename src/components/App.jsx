import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayuot';

// import  from './Cast';
// import  from './Reviews';

import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
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
