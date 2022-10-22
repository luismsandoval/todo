import React, { useContext } from "react";

import ToDo from "./components/todo/todo";
import Head from "./components/header/header";


export default class App extends React.Component {
  render() {
    return (
      <>
        <Head />
        <ToDo />
      </>
    );
  }
}
