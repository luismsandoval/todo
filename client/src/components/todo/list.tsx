import Cards from "@cloudscape-design/components/cards";
import { useEffect, useState } from "react";

export interface ToDoTask {
  name: number;
  description: string;
  assignee: string;
  difficulty: "Easy" | "Moderate" | "Hard";
  completed: boolean;
}

const List = (props: any) => {
  const [listItems, setListItems] = useState(props.list);

  // const getTasks = () => {
  //   fetch("https://localhost:3001/")
  //     .then((response) => response.json())
  //     .then((data) => setListItems(data));
  // };

  useEffect(() => {
    setListItems(props.list);
  });

  return (
    <>
      <Cards
        cardDefinition={{
          header: (e) => e.description,
          sections: [
            {
              id: "name",
              header: "Assignee",
              content: (e) => e.name,
            },
            {
              id: "difficulty",
              header: "Difficulty",
              content: (e) => e.difficulty,
            },
          ],
        }}
        items={listItems}
      ></Cards>
    </>
  );
};

export default List;
