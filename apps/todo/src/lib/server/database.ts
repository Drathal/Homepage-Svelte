import type { TodoAPI } from '$lib/schema/todo';

export let todos: TodoAPI[] = [
  { id: 1, text: 'Learn about Svelte', completed: false },
  { id: 2, text: 'Deploy my Stuff', completed: false }
];

export function getTodos() {
  return todos;
}

export function addTodo(text: string) {
  const todo = { id: Date.now(), text, completed: false };
  todos = [todo, ...todos];
  return todo;
}

export function removeTodo(id: number) {
  todos = todos.filter((todo) => todo.id !== id);
  return todos.find((todo) => todo.id === id);
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

export function setTodos(newTodos: TodoAPI[]) {
  todos = newTodos;
}
