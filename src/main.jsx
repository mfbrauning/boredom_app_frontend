import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <h1>hello world</h1>,
//   document.getElementById('root')
// )
