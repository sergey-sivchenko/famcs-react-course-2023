import { useState } from "react";
import { useDispatch } from "react-redux";

import { requestAddTodo } from "store/todo";

import { AddButton, Container, Input } from "./styled";

const NewItem = ({ isTodosLoading }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = async () => {
    if (text) {
      dispatch(
        requestAddTodo({
          onSuccess: () => setText(""),
          text,
        }),
      );
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
