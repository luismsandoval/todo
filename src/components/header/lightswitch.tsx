import { useContext } from "react";
import { DarkModeContext } from "../../context/settings/context";
import { Toggle } from "@cloudscape-design/components";

export const Lightswitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => toggleDarkMode();

  return (
    <Toggle onChange={handleClick} checked={darkMode}>
      {darkMode ? "🌙" : "☀️"}
    </Toggle>
  );
};
