import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Message = styled.p`
  color: #ffffff;
`;
