import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  margin-left: 0;
  margin-right: 0;
}

button, input {
  outline: none;
}

button {
  cursor: pointer;
  }

`;

export const commonContainerStyles = `
width: 100%;
padding: 0 16px;

  @media (min-width: 480px) {
    max-width: 480px;
    margin: 0 auto;

  }
  
  @media (min-width: 768px) {
    max-width: 768px;

  }
  
  @media (min-width: 1200px) {
    max-width: 1200px;

  }
  `;
