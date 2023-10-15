import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 320px;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;

  &.active {
    font-weight: 600;
  }
`;
