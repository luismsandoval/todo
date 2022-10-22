import React from "react";

import ToDo from "./components/todo/todo";
import Head from "./components/header/header";
import { DarkModeProvider } from "./context/settings/context";
// import "@cloudscape-design/global-styles/index.css"

export default class App extends React.Component {
  render() {
    return (
      <DarkModeProvider>
        <Head />
        <ToDo />
      </DarkModeProvider>
    );
  }
}
