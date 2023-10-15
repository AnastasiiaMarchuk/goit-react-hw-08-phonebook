import { Container, NavLink } from './AuthNav.styled';
import { MdOutlinePrivacyTip } from 'react-icons/md';
export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register">Sign Up</NavLink>
      <MdOutlinePrivacyTip size={36} color="#fff" />
      <NavLink to="/login">Log In</NavLink>
    </Container>
  );
};
