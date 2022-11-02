import { useContext } from "react";
import { SettingsContext } from "../../context/settings/context";
import { Toggle } from "@cloudscape-design/components";

export const Lightswitch = () => {
  const { darkMode, toggleDarkMode } = useContext(SettingsContext);
  const handleClick = () => toggleDarkMode();

  return (
    <Toggle onChange={handleClick} checked={darkMode}>
      {darkMode ? "🌙" : "☀️"}
    </Toggle>
  );
};
