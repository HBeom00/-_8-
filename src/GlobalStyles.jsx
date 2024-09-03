import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Okticon';
    src: url('/fonts/okticon_bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Okticon';
    src: url('/fonts/okticon_light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Okticon';
    src: url('/fonts/okticon_regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    height: 100%;
    font-family: 'Okticon', sans-serif;
  }

  #root, body {
    width: 100%;
    font-family: 'Okticon', sans-serif;

  }
`;

export default GlobalStyles;
