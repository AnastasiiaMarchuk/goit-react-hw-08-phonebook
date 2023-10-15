import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    font-size: 16px;
    color: #ffffff;
    @media (max-width: 380px) {
      display: none;
    }
    @media (min-width: 1200px) {
      font-size: 20px;
    }
  }
  button {
    background-color: transparent;
    color: #ffffff;
    font-weight: 500;
    border: none;
    padding: 8px 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  :hover {
    font-weight: 600;
  }
`;
