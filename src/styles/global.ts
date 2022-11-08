import { createGlobalStyle } from "styled-components";
import "assets/fonts/index.css";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    button{
        background: none;
        border: none;

    }
    
    input{
        border: none;
        &:focus{
            outline: none;
        }
    }

    ul{
        padding: 0;
        list-style: none;
    }
`;

export default GlobalStyle;
