import { useState } from "react";
import List from "./list";
import TodoForm from "./form";

export interface ToDoTask {
  name: number;
  description: string;
  assignee: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  completed: boolean;
}

const initialState: ToDoTask[] = [];

const ToDo = () => {
  const [state, setState] = useState(initialState);

  const addTask = (card: ToDoTask) => {
    console.log("card: ", card);
    setState([...state, card]);
    console.log("state: ", state);
    // fetch("http://localhost:3001/", {
    //   method: "POST",
    //   body: JSON.stringify(card),
    // })
    //   .then((response) => response.json())
    //   .then((data) => setState([...state, data]));
  };

  return (
    <>
      <header>
        <h1>To Do List:  items pending</h1>
      </header>
      <TodoForm addTask={addTask} />
      <List list={state} setList={setState} />
    </>
  );
};

export default ToDo;
