import { styled } from 'styled-components';

export const Container = styled.div`
  @media (min-width: 768px) {
    width: 500px;
  }
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(13, 33, 70, 0.7);
  backdrop-filter: blur(5.1px);
  -webkit-backdrop-filter: blur(5.1px);
  padding: 30px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 20px;
  }
  label {
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 8px;
  }
  input {
    margin-bottom: 4px;
    margin-top: 6px;
    font-size: 20px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    &::placeholder {
      color: #0d2146;
      font-size: 14px;
      font-style: italic;
    }
  }
  span {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
  }
  button {
    width: 100%;
    background-color: #475a8a;
    font-size: 20px;
    border-radius: 5px;
    color: #ffffff;
    margin-top: 24px;
    cursor: pointer;
    height: 40px;
    border: none;
    &:hover {
      box-shadow: 0px 0px 5px 2px rgba(255, 255, 255, 1);
    }
  }
`;
