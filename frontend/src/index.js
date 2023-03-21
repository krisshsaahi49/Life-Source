import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "popper.js";

const loader = document.querySelector("#preloader");

const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

setTimeout(
  () =>
    ReactDOM.render(
      <App hideLoader={hideLoader} showLoader={showLoader} />,
      document.getElementById("root")
    ),
  1000
);