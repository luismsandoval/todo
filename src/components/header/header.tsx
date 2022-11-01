import SpaceBetween from "@cloudscape-design/components/space-between";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import { Lightswitch } from "./lightswitch";
import { Box } from "@cloudscape-design/components";

const Head = () => {
  return (
    <Box margin="xxs" padding="xs">
      <SpaceBetween size="m">
        <Header
          variant="h1"
          info={<Link>more</Link>}
          description="Got a lot to do? Use ToDo!"
          actions={<Button variant="primary">Login</Button>}
        >
          ToDo
        </Header>
        <Box float="right">
          <Lightswitch />
        </Box>
        <Alert>Please login or signup.</Alert>
      </SpaceBetween>
    </Box>
  );
};

export default Head;
