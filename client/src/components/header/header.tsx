import SpaceBetween from "@cloudscape-design/components/space-between";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import { Lightswitch } from "./lightswitch";
import { Box } from "@cloudscape-design/components";
import AuthButtons from "../../context/auth/authButtons";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { SettingsContext } from "../../context/settings/context";

const Head = () => {
  const { isAuthenticated } = useAuth0()
  const { login } = useContext(SettingsContext);

  return (
    <Box margin="xxs" padding="xs">
      <SpaceBetween size="m">
        <Header
          variant="h1"
          info={<Link>more</Link>}
          description="Got a lot to do? Use ToDo!"
          actions={<AuthButtons />}
        >
          ToDo
        </Header>
        <Box float="right">
          <Lightswitch />
        </Box>
        {!isAuthenticated ? <Alert>Please login or signup.</Alert> : null}
      </SpaceBetween>
    </Box>
  );
};

export default Head;
