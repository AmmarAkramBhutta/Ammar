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
    margin: 0 11vw;
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


`;

export default GlobalStyle;
