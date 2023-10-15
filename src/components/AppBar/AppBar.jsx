import { Navigation } from '../Navigation/Navigation';
import { Header, Message } from './AppBar.styled';
import { useAuth } from 'redux/hooks/UseAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Message>Authorize to open your phone book</Message>
      )}
    </Header>
  );
};
