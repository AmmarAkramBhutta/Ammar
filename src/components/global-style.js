import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: white;
    font-family: 'Mulish', sans-serif;
    max-width: 1024px;
    margin: 0 auto;
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

  .highlite{
  position: relative;
  padding: 7px 0.03125em;
  white-space: nowrap;
  font-size: 17px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}


.highlite::after {
  content: "";
  position: absolute;
  inset: 0.328125em -0.125em 0.109375em;
  background: rgb(255, 199, 0);
  border-radius: 0.03125em;
  z-index: -1;
}


.technologies__bullets {
    margin-top: 13px;
    margin: 13px 0 32px;
  }
  .bullet{
    margin: 7px;
    padding: 7px 10px;
    font-weight: bold;
    font-size: 13px;
    background-color: rgb(255,199,0);
  }

  .project-text {
    font-size: 14px;
    line-height: 110%;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #9b51e0;
  }
`;

export default GlobalStyle;
