import { useDispatch } from "react-redux";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { Close } from "@styled-icons/material-outlined/Close";

import { requestRemoveTodo, requestUpdateTodo } from "store/todo";

import { Container, Content, Text } from "./styled";

const Item = ({ id, isCompleted, text }) => {
  const dispatch = useDispatch();

  const handleTodoClick = async () => {
    dispatch(
      requestUpdateTodo({
        todo: { id, isCompleted: !isCompleted, text },
      }),
    );
  };

  const handleRemoveClick = async () => {
    dispatch(requestRemoveTodo({ id }));
  };

  return (
    <Container isCompleted={isCompleted}>
      <Content onClick={handleTodoClick}>
        {isCompleted ? (
          <CheckBox size={24} title="Checked" />
        ) : (
          <CheckBoxOutlineBlank size={24} title="Unchecked" />
        )}
        <Text isCompleted={isCompleted}>{text}</Text>
      </Content>
      <Close size={24} title="Remove" onClick={handleRemoveClick} />
    </Container>
  );
};

export default Item;
