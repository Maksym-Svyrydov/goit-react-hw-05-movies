import { Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">About</Link>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
export default SharedLayout;
