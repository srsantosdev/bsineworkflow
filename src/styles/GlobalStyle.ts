import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.2%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F1F3F3;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100vh;
  }
`;
