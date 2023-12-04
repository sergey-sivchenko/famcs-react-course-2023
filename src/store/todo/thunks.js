import { createAsyncThunk } from "@reduxjs/toolkit";

import { addTodo, getTodos, removeTodo, updateTodo } from "api/todos";

export const requestAddTodo = createAsyncThunk("todo/addTodo", async ({ onSuccess, text }) => {
  await addTodo(text);

  if (onSuccess) {
    onSuccess();
  }

  return getTodos();
});

export const requestTodos = createAsyncThunk("todo/getTodo", async () => getTodos());

export const requestRemoveTodo = createAsyncThunk("todo/removeTodo", async ({ id, onSuccess }) => {
  await removeTodo(id);

  if (onSuccess) {
    onSuccess();
  }

  return getTodos();
});

export const requestUpdateTodo = createAsyncThunk(
  "todo/toggleTodo",
  async ({ onSuccess, todo }) => {
    await updateTodo(todo);

    if (onSuccess) {
      onSuccess();
    }

    return getTodos();
  },
);
