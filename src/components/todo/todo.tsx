import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import Header from "@cloudscape-design/components/header";

import { v4 as uuidv4 } from "uuid";
import { ColumnLayout, FormField, Input, RadioGroup } from "@cloudscape-design/components";

const ToDo = () => {
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuidv4();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  const [inputValue, setInputValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [difficultyValue, setDifficultyValue] = useState("");

  return (
    <>
      <header>
        <h1>To Do List: {incomplete} items pending</h1>
      </header>
      <form onSubmit={handleSubmit}>
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
                onChange={(event) => setInputValue(event.detail.value)}
                value={inputValue}
              />
              <Input
                controlId="input-2"
                onChange={(event) => setNameValue(event.detail.value)}
                value={nameValue}
              />
              <RadioGroup
                items={[
                  {
                    value: "1",
                    label:
                      "Easy",
                  },
                  {
                    value: "2",
                    label: "Normal",
                  },
                  { value: "3", label: "Hard" },
                ]}
                value={difficultyValue}
                onChange={(event => setDifficultyValue(event.detail.value))}
              />
            </ColumnLayout>
          </FormField>
          {/* <label>
            <span>To Do Item</span>
            <input
              onChange={handleChange}
              name="text"
              type="text"
              placeholder="Item Details"
            />
          </label> */}
          {/* <label>
            <span>Assigned To</span>
            <input
              onChange={handleChange}
              name="assignee"
              type="text"
              placeholder="Assignee Name"
            />
          </label> */}

          {/* <label>
            <span>Difficulty</span>
            <input
              onChange={handleChange}
              defaultValue={defaultValues.difficulty}
              type="range"
              min={1}
              max={5}
              name="difficulty"
            />
          </label> */}

          {/* <label>
            <button type="submit">Add Item</button>
          </label> */}
        </Form>
      </form>

      {list.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p>
            <small>Assigned to: {item.assignee}</small>
          </p>
          <p>
            <small>Difficulty: {item.difficulty}</small>
          </p>
          <div onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default ToDo;
