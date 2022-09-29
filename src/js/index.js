import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

const renderIt = () => {
    ReactDOM.render(<Home />, document.querySelector("#app"));
};

setInterval(renderIt, 1000);
;
