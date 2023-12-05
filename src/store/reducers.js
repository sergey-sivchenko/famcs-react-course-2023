import { appSlice } from "./app";
import { todoSlice } from "./todo";

export const rootReducer = {
  app: appSlice.reducer,
  todo: todoSlice.reducer,
};
