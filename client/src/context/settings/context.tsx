import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const { isAuthenticated } = useAuth0();
  const [login, setLogin] = useState(false);
  const toggleLogin = () => {
    isAuthenticated ? setLogin(!login) : null;
  };

  return (
    <div>
      <SettingsContext.Provider
        value={{ darkMode, toggleDarkMode, login, toggleLogin }}
      >
        {props.children}
      </SettingsContext.Provider>
    </div>
  );
};

export { SettingsContext, SettingsProvider };
