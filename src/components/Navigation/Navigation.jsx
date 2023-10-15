import { Link } from 'components/MainLayout/MainLayout.styled';
import { Nav } from './Navigation.styled';
import { useAuth } from 'redux/hooks/UseAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Phonebook</Link>}
    </Nav>
  );
};
