import { useCallback } from "react";

import { getTodos } from "api/todos";
import useAsync from "hooks/use-async";

import Item from "./Item";
import NewItem from "./NewItem";
import { Container, SubTitle, Title } from "./styled";

const Todo = () => {
  const getTodosList = useCallback(() => getTodos(), []);
  const {
    execute: requestTodos,
    isLoading: isTodosLoading,
    value: todos = [],
  } = useAsync(getTodosList);

  return (
    <Container>
      <Title>My first TODO list</Title>
      <SubTitle>Click the items to complete/incomplete them</SubTitle>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          isCompleted={todo.isCompleted}
          requestTodos={requestTodos}
          text={todo.text}
        />
      ))}
      <NewItem isTodosLoading={isTodosLoading} requestTodos={requestTodos} />
    </Container>
  );
};

export default Todo;
