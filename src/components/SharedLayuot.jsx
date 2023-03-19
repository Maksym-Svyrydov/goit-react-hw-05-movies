import { Outlet, NavLink } from 'react-router-dom';
// import Home from 'pages/Home';
// import MoviesList from './MovieList';
export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
