import storage from "api";

const TODOS_STORAGE_KEY = "todos";

/* todos
  [
    {
      id: string,
      isCompleted: boolean,
      text: string,
    }
  ]
*/

export const addTodo = async (text) => {
  const todos = (await storage.getItem(TODOS_STORAGE_KEY)) || [];

  todos.push({ id: `${Date.now()}`, text, isCompleted: false });

  return storage.setItem(TODOS_STORAGE_KEY, todos);
};

export const getTodos = async () => {
  const todos = await storage.getItem(TODOS_STORAGE_KEY);

  return todos || [];
};

export const removeTodo = async (id) => {
  const todos = await storage.getItem(TODOS_STORAGE_KEY);

  return storage.setItem(
    TODOS_STORAGE_KEY,
    todos.filter((todo) => todo.id !== id),
  );
};

export const updateTodo = async (todo) => {
  const todos = (await storage.getItem(TODOS_STORAGE_KEY)) || [];

  todos.splice(
    todos.findIndex((t) => t.id === todo.id),
    1,
    todo,
  );

  return storage.setItem(TODOS_STORAGE_KEY, todos);
};
