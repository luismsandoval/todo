import ContentLayout from "@cloudscape-design/components/content-layout";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Header from "@cloudscape-design/components/header";
import Link from "@cloudscape-design/components/link";
import Button from "@cloudscape-design/components/button";
import Alert from "@cloudscape-design/components/alert";
import { Lightswitch } from "./lightswitch";
import { useState } from "react";

const Head = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <ContentLayout
        header={
          <SpaceBetween size="m">
            <Header
              variant="h1"
              info={<Link>more</Link>}
              description="Got a lot to do? Use todo!"
              actions={<Button variant="primary">Login</Button>}
            >
              Todo App
            </Header>
            <Lightswitch/>
            {/* <Toggle
              onChange={({ detail }) => setChecked(detail.checked)}
              checked={checked}
            >
              night light
            </Toggle> */}

            <Alert>Please login or signup.</Alert>
          </SpaceBetween>
        }
      >
        {/* <Container
          header={
            <Header variant="h2" description="Container description">
              Container header
            </Header>
          }
        >
          Container content
        </Container> */}
      </ContentLayout>
    </>
  );
};

export default Head;
