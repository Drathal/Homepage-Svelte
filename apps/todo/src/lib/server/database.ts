type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export let todos: Todo[] = [
  { id: Date.now(), text: 'Learn about Svelte', completed: false },
  { id: Date.now(), text: 'Deploy my Stuff', completed: false }
];

export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  todos = [{ id: Date.now(), text, completed: false }, ...todos];
}

export function removeTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
  todos = [];
}

export function updateTodo(id: number, text: string) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, text };
    }
    return todo;
  });
}

export function toggleTodo(id: number) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}

export function setTodos(newTodos: Todo[]) {
  todos = newTodos;
}
