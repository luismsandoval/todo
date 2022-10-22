import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "@cloudscape-design/global-styles/index.css";
import App from "./App";
import { DarkModeProvider } from "./context/settings/context";

const Main = () => {
  return (
    <DarkModeProvider>
      <App />;
    </DarkModeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
