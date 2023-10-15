import { styled } from 'styled-components';

export const Section = styled.section`
  background-color: rgba(13, 33, 70, 0.7);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  color: rgba(13, 33, 70, 0.8);
  margin: 50px auto 0;
  border-radius: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    color: #fff;
    padding: 18px 6px 18px 18px;
    margin: 0;
  }
`;

export const SearchSection = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    gap: 30px;
  }
`;

export const Container = styled.div`
  padding: 30px;
`;

export const ContactsSection = styled.section`
  padding: 10px 30px;
  h2 {
    font-size: 28px;
    font-weight: 600;
    color: #ffffff;
    margin: 20px 0 10px;
  }
`;
