import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  label {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
  input {
    margin-top: 12px;
    margin-bottom: 20px;
    font-size: 20px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    padding-right: 40px;
    &::placeholder {
      color: #0d2146;
      font-style: italic;
    }
  }
  button {
    position: absolute;
    top: 50%;
    right: 5px;
    margin-top: 13px;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
