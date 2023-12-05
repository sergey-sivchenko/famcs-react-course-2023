import { createSlice } from "@reduxjs/toolkit";

import {
  requestAddTodoItem,
  requestRemoveTodoItem,
  requestTodoItems,
  requestUpdateTodoItem,
} from "./thunks";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    error: null,
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(requestAddTodoItem.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestAddTodoItem.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(requestAddTodoItem.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestTodoItems.pending, (state) => {
      state.error = null;
      state.items = [];
      state.loading = true;
    });
    builder.addCase(requestTodoItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(requestTodoItems.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestRemoveTodoItem.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestRemoveTodoItem.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(requestRemoveTodoItem.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });

    builder.addCase(requestUpdateTodoItem.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(requestUpdateTodoItem.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    });
    builder.addCase(requestUpdateTodoItem.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
  },
});
