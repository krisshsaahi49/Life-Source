import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/themify-icon/themify-icons.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.min.js";
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
