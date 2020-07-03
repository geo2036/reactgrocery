import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto+Condensed:wght@300&display=swap');

  html, body {
      margin: 0 auto;
      padding: 0;
  }
  *, *::after, *::before {
      box-sizing: border-box;
  }
  body {
      background: ${({ theme }) => theme.background };
      color: ${({ theme }) => theme.primaryDark };
      max-width: 80%;
      min-width:400px;
      font-family: 'Montserrat', sans-serif;
      text-rendering: optimizeLegibility;

      @media (max-width: ${({ theme }) => theme.mobile }){
        max-width: 90%;
      }
  }

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`