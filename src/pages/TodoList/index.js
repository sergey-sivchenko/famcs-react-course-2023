import { useCallback, useState } from "react";

import styles from "./index.module.css";
import Item from "./Item";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: crypto.randomUUID(), isCompleted: true, text: "Create name for the application" },
    { id: crypto.randomUUID(), isCompleted: true, text: "Create GitHub repository" },
    { id: crypto.randomUUID(), isCompleted: true, text: "Add repository description" },
    { id: crypto.randomUUID(), isCompleted: false, text: "Create first react app using CRA" },
    { id: crypto.randomUUID(), isCompleted: false, text: "Attend class on 24/10/2022" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoInput = useCallback((event) => {
    setNewTodo(event.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    setTodos((prevState) => [
      ...prevState,
      { id: crypto.randomUUID(), isCompleted: false, text: newTodo },
    ]);
    setNewTodo("");
  }, [newTodo]);

  return (
    <>
      <h1>Todo list</h1>
      <div className={styles["input-container"]}>
        <input className={styles.input} onChange={handleNewTodoInput} value={newTodo} />
        <button className={styles.button} onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className={styles.container}>
        {todos.map((todo) => (
          <Item key={todo.id} id={todo.id} completed={todo.isCompleted} text={todo.text} />
        ))}
      </div>
    </>
  );
};

export default Todo;
