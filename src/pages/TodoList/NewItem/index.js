import { useState } from "react";

import { addTodo } from "api/todos";

import { AddButton, Container, Input } from "./styled";

const NewItem = ({ isTodosLoading, requestTodos }) => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = async () => {
    if (text) {
      await addTodo(text);

      requestTodos();
      setText("");
    }
  };

  return (
    <Container>
      <Input value={text} onChange={handleInputChange}></Input>
      <AddButton disabled={!text || isTodosLoading} onClick={handleAddClick}>
        Add
      </AddButton>
    </Container>
  );
};

export default NewItem;
