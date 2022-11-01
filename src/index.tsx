import ReactDOM from "react-dom";
import "@cloudscape-design/global-styles/index.css";
import App from "./App";
import { SettingsProvider } from "./context/settings/context";

const Main = () => {
  return (
    <SettingsProvider>
      <App />;
    </SettingsProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
