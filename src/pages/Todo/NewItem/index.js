import { useState } from "react";
import { useDispatch } from "react-redux";

import { requestAddTodoItem } from "store/todo";

import { AddButton, Container, Input } from "./styled";

const NewItem = ({ isTodoLoading }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddClick = async () => {
    if (text) {
      dispatch(
        requestAddTodoItem({
          onSuccess: () => setText(""),
          text,
        }),
      );
    }
  };

  return (
    <Container>
      <Input value={text} onChange={handleInputChange}></Input>
      <AddButton disabled={!text || isTodoLoading} onClick={handleAddClick}>
        Add
      </AddButton>
    </Container>
  );
};

export default NewItem;
