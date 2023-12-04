import { createSlice } from "@reduxjs/toolkit";

import { requestAddTodo, requestRemoveTodo, requestTodos, requestUpdateTodo } from "./thunks";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    error: null,
    list: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestAddTodo.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestAddTodo.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(requestAddTodo.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestTodos.pending, (state) => {
      state.error = null;
      state.list = [];
      state.loading = true;
    });
    builder.addCase(requestTodos.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(requestTodos.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestRemoveTodo.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestRemoveTodo.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(requestRemoveTodo.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestUpdateTodo.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestUpdateTodo.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(requestUpdateTodo.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
