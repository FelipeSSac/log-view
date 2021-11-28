import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --primaryDark: #292929;
    --secondaryDark: #121212;
    --primaryPurple: #bb86fc;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: var(--primaryDark);
    color: #fff;
  
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, input, select, textarea {
    outline: none;

    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`