import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    error: null,
    loading: false,
  },
  reducers: {},
});
