import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// this is just a function provided by ReactDom library in React that allows you to render your react components to the DOM

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
