import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
body,
input,
button {
  font: 500 1.6rem Poppins;
}


@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}

`;
