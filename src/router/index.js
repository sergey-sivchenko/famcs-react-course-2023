import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "pages/ErrorPage";
import Home from "pages/Home";
import Root from "pages/Root";
import Todo from "pages/Todo";
import TodoList from "pages/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "todo/:todoId",
        element: <Todo />,
      },
    ],
  },
]);
