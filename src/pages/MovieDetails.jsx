import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { fetchMovieById } from '../API/AxiosAPI';

const movieImgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  // console.log(movie);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId).then(result => setMovie(result));
  });
  if (!movie) {
    return;
  }

  return (
    <div>
      <Link to={backLinkHref}>Go BACK</Link>
      <div>
        <p>{movie.title}</p>
        <img src={`${movieImgBaseUrl + movie.poster_path}`} alt={movie.title} />
      </div>
      <div>
        <p>Overview</p>
        <p>{movie.overview}</p>
      </div>

      <div>
        <Link to="cast" state={location.state}>
          Cast
        </Link>

        <Link to="reviews" state={location.state}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
