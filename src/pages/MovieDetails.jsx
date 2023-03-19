import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const MovieDetails = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  return (
    <div class="">
      <button to={backLinkHref}>Go BACK</button>
      <div class=""></div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
export default MovieDetails;
