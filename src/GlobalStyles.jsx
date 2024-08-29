import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html{
    height: 100%;
}

#root,
body{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export default GlobalStyles;
