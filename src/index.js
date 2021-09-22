import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./Context";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";

const store = createStore((e) => console.log("tmp reducer"));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MovieProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MovieProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
