import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    li {
        text-decoration: none;
        list-style: none;
    }

    body {
        font-family: "Helvetica Neue",Helvetica,Arial;
        background-color: ${props => props.theme.colors.secundary}
    }
    
    Link {
        text-decoration:none;
    }
`;