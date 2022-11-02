import ReactDOM from "react-dom";
import "@cloudscape-design/global-styles/index.css";
import App from "./App";
import { SettingsProvider } from "./context/settings/context";
import { Auth0Provider } from "@auth0/auth0-react";

const Main = () => {
  return (
    <Auth0Provider
      domain="dev-01b2cup5.us.auth0.com"
      clientId="8FBJCPZJLKg0ALV1t5C2uMNPRuXxUafA"
      redirectUri={window.location.origin}
    >
      <SettingsProvider>
        <App />;
      </SettingsProvider>
    </Auth0Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
