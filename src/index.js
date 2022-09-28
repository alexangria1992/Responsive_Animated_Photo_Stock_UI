import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { Colors } from "./assets/Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colors.Secondary}
  }

  * {
    padding: 0;
    transition: all .2s ease-out;
    margin: 0;
    box-sizing: border-box ;
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoratio: none ;
  }

  a:visited {
    color: #070710;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyle />

      <App />
    </React.Fragment>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
