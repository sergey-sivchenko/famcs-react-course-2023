import { createAsyncThunk } from "@reduxjs/toolkit";

import { addTodoItem, getTodoItems, removeTodoItem, updateTodoItem } from "api/todo";

export const requestAddTodoItem = createAsyncThunk(
  "todo/addTodoItem",
  async ({ onSuccess, text }) => {
    await addTodoItem(text);

    if (onSuccess) {
      onSuccess();
    }

    return getTodoItems();
  },
);

export const requestTodoItems = createAsyncThunk("todo/getTodoItems", async () => getTodoItems());

export const requestRemoveTodoItem = createAsyncThunk(
  "todo/removeTodoItem",
  async ({ id, onSuccess }) => {
    await removeTodoItem(id);

    if (onSuccess) {
      onSuccess();
    }

    return getTodoItems();
  },
);

export const requestUpdateTodoItem = createAsyncThunk(
  "todo/toggleTodo",
  async ({ onSuccess, todo }) => {
    await updateTodoItem(todo);

    if (onSuccess) {
      onSuccess();
    }

    return getTodoItems();
  },
);
