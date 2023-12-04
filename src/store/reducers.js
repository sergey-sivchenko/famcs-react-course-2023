import { todoSlice } from "./todo";

export const rootReducer = {
  todo: todoSlice.reducer,
};
