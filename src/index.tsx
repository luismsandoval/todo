import React from "react";
import ReactDOM from "react-dom";
import "@cloudscape-design/global-styles/index.css"
import App from "./App";

const Main = () => {
    return <App />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
