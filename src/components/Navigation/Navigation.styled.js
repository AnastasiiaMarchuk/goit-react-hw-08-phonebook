import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 8px 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  @media (min-width: 1200px) {
    font-size: 20px;
  }

  &.active {
    font-weight: 600;
  }
`;
