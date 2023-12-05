import storage from "api";

const TODO_STORAGE_KEY = "todo";

/* todo
  [
    {
      id: string,
      isCompleted: boolean,
      text: string,
    }
  ]
*/

export const addTodoItem = async (text) => {
  const todoItems = (await storage.getItem(TODO_STORAGE_KEY)) || [];

  todoItems.push({ id: `${Date.now()}`, text, isCompleted: false });

  return storage.setItem(TODO_STORAGE_KEY, todoItems);
};

export const getTodoItems = async () => {
  const todoItems = await storage.getItem(TODO_STORAGE_KEY);

  return todoItems || [];
};

export const removeTodoItem = async (id) => {
  const todoItems = await storage.getItem(TODO_STORAGE_KEY);

  return storage.setItem(
    TODO_STORAGE_KEY,
    todoItems.filter((todo) => todo.id !== id),
  );
};

export const updateTodoItem = async (todo) => {
  const todoItems = (await storage.getItem(TODO_STORAGE_KEY)) || [];

  todoItems.splice(
    todoItems.findIndex((t) => t.id === todo.id),
    1,
    todo,
  );

  return storage.setItem(TODO_STORAGE_KEY, todoItems);
};
