import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestTodoItems } from "store/todo";

import Item from "./Item";
import NewItem from "./NewItem";
import { Container, SubTitle, Title } from "./styled";

const Todo = () => {
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(requestTodoItems());
  }, [dispatch]);

  return (
    <Container>
      <Title>My first TODO items</Title>
      <SubTitle>Click the items to complete/incomplete them</SubTitle>
      {items.map((todo) => (
        <Item key={todo.id} id={todo.id} isCompleted={todo.isCompleted} text={todo.text} />
      ))}
      <NewItem isTodoLoading={loading} />
    </Container>
  );
};

export default Todo;
