import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
ReactDOM.render(
  //App컴포넌트를 BrowserRouter로 감싸서 App 안에서 Router 기능을 활용하도록 함.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
