import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Open Sans', serif;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
    }
`;