import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root/Root";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap");
  body{
    margin:0;
    padding:0;
    
  }    
* {
      font-family: 'PT Serif', serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
