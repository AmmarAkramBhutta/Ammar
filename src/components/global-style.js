import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    background: white;
    font-family: 'Mulish', sans-serif;
    margin: 0 11vw;
  }

  .sticky {
    position: sticky;
    padding: 10px 0px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: solid 1px transparent;
    border-right: 0px;
    border-left: 0px;
    background-clip: padding-box;
    box-shadow: 0 -200px 0 rgba(46, 54, 68, 0.03);
    opacity: 1;
    transition: position 2s;
  }

  button {
    font-weight: normal;
    font-size: 17px;
    cursor: pointer;
    padding: 11px 30px;
    border: 0;
    border-radius: 150px;
    background: #9B51E0;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: purple;
    }
  }

  h1{
    font-weight: 400;
    font-family: 'Abril Fatface';
    font-size: 105px;
    line-height: 89%;
  }

  h2 {
    font-size:56px ;
    font-family: 'Abril Fatface', serif;
    font-weight: 400;
  }
  p{
    font-family: 'Mulish', sans-serif;
    font-size: 18px;
    line-height: 180%;
  }

  .purpled {
    color: #9B51E0;
  }

  

`;

export default GlobalStyle;
