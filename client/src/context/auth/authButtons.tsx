import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { SettingsContext } from "../settings/context";
import LoginButton from "./login";
import LogoutButton from "./logout";


const AuthButtons = () => {
  const { toggleLogin, login } = useContext(SettingsContext);
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />
};

export default AuthButtons;
