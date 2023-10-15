import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Container } from './UserMenu.styled';
import { useAuth } from 'redux/hooks/UseAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </button>
    </Container>
  );
};
