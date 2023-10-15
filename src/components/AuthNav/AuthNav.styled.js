import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #ffffff;
`;

export const NavLink = styled(Link)`
  padding: 8px 16px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 14px;
`;
