import React, { useContext, useEffect } from "react";
import { SettingsContext } from "./context/settings/context";

import ToDo from "./components/todo/todo";
import Head from "./components/header/header";
import Footer from "./components/footer/footer";

import ContentLayout from "@cloudscape-design/components/content-layout";
import Container from "@cloudscape-design/components/container";
import Header from "@cloudscape-design/components/header";
import { useAuth0 } from "@auth0/auth0-react";

//export default class App extends React.Component
const App = () => {
  const { darkMode } = useContext(SettingsContext);
  const { toggleLogin, login } = useContext(SettingsContext);
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <ContentLayout
        className={darkMode ? "awsui-dark-mode" : "awsui-light-mode"}
        header={<Head />}
      >
        {isAuthenticated ? (
          <Container
            header={<Header variant="h2">Welcome back {user?.name}! </Header>}
            footer={<Footer />}
          >
            <ToDo />
          </Container>
        ) : (
          <Container
            header={<Header variant="h2"></Header>}
            footer={<Footer />}
          ></Container>
        )}
      </ContentLayout>
    </>
  );
};

export default App;
