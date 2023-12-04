import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestTodos } from "store/todo";

import Item from "./Item";
import NewItem from "./NewItem";
import { Container, SubTitle, Title } from "./styled";

const TodoList = () => {
  const dispatch = useDispatch();
  const { loading, list } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(requestTodos());
  }, [dispatch]);

  return (
    <Container>
      <Title>My first TODO list</Title>
      <SubTitle>Click the items to complete/incomplete them</SubTitle>
      {list.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          requestTodos={requestTodos}
          text={todo.text}
        />
      ))}
      <NewItem isTodosLoading={loading} requestTodos={requestTodos} />
    </Container>
  );
};

export default TodoList;
