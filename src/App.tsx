import React, { useContext } from "react";
import { SettingsContext } from "./context/settings/context";

import ToDo from "./components/todo/todo";
import Head from "./components/header/header";
import Footer from "./components/footer/footer";

import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";

//export default class App extends React.Component
const App = () => {
  const { darkMode } = useContext(SettingsContext);

  return (
    <>
      <ContentLayout
        className={darkMode ? "awsui-dark-mode" : "awsui-light-mode"}
        header={<Head />}
      >
        <Container
          header={<Header variant="h2">To Do List</Header>}
          footer={<Footer />}
        >
          <ToDo />
        </Container>
      </ContentLayout>
    </>
  );
};

export default App;
