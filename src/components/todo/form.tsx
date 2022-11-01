import {
  Form,
  SpaceBetween,
  Button,
  Header,
  ColumnLayout,
  FormField,
  Input,
  RadioGroup,
} from "@cloudscape-design/components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useForm from "../../hooks/form";

const TodoForm = (props: any) => {
  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");

  const handleSubmit = (e: any, callback: Function) => {
    e.preventDefault();
    let data = {
      name: nameValue,
      description: inputValue,
      difficulty: difficultyValue,
      completed: false,
    };
    callback(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, props.addTask)}>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button formAction="none" variant="link">
              Cancel
            </Button>
            <Button variant="primary">Submit</Button>
          </SpaceBetween>
        }
        header={<Header variant="h1">Todo List</Header>}
      >
        <h2>Add To Do Item</h2>
        <FormField description="Item Details" label="To Do Item">
          <ColumnLayout columns={3}>
            <Input
              controlId="input-1"
              onChange={({ detail }) => {
                setInputValue(detail.value);
                // handleChange(detail);
              }}
              value={inputValue}
              name="task"
            />
            <Input
              controlId="input-2"
              onChange={({ detail }) => {
                setNameValue(detail.value);
                // handleChange(event);
              }}
              value={nameValue}
              name="assignee"
            />
            <RadioGroup
              items={[
                {
                  value: "1",
                  label: "Easy",
                },
                {
                  value: "2",
                  label: "Normal",
                },
                {
                  value: "3",
                  label: "Hard",
                },
              ]}
              value={difficultyValue}
              name="difficulty"
              onChange={({ detail }) => {
                setDifficultyValue(detail.value);
                // handleChange(event);
              }}
            />
          </ColumnLayout>
        </FormField>
      </Form>
    </form>
  );
};

export default TodoForm;
