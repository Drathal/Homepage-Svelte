import { describe, it, expect, beforeEach } from 'vitest';
import {
  todos,
  getTodos,
  addTodo,
  clearTodos,
  removeTodo,
  setTodos,
  updateTodo,
  toggleTodo
} from './database';

describe('getTodos()', () => {
  it('should return the actual todos', () => {
    let result = getTodos();
    expect(result).toEqual(todos);
  });
});

describe('setTodos()', () => {
  it('should return the actual todos', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];
    setTodos(newTodos);
    let result = getTodos();
    expect(result).toEqual(todos);
  });
});

describe('clearTodos()', () => {
  it('schould return an empty array', () => {
    clearTodos();
    expect(todos).toEqual([]);
  });
});

describe('addTodo', () => {
  beforeEach(() => {
    clearTodos();
  });

  it('should add a todo to the beginning of the todos array', () => {
    const text = 'Buy milk';
    addTodo(text);
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe(text);
  });

  it('should add multiple todos to the beginning of the todos array', () => {
    const texts = ['Buy milk', 'Walk the dog', 'Do laundry'];
    texts.forEach((text) => addTodo(text));
    expect(todos).toHaveLength(texts.length);
    expect(todos.map((todo) => todo.text)).toEqual(texts.reverse());
  });
});

describe('updateTodo', () => {
  it('should update a todo with a given ID', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    setTodos(newTodos);

    const expectedTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do the laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    updateTodo(2, 'Do the laundry');

    expect(todos).toEqual(expectedTodos);
  });

  it('should not modify the array if no todo with the given ID is found', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    setTodos(newTodos);

    const expectedTodos = [
      { id: 1, text: 'Buy milk', completed: false },

      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    updateTodo(4, 'Do the laundry');

    expect(todos).toEqual(expectedTodos);
  });
});

describe('removeTodo', () => {
  it('should remove a todo with a given ID', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    setTodos(newTodos);

    const expectedTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    removeTodo(2);

    expect(todos).toEqual(expectedTodos);
  });

  it('should not modify the array if no todo with the given ID is found', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    setTodos(newTodos);

    const expectedTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    removeTodo(4);

    expect(todos).toEqual(expectedTodos);
  });
});

describe('toggleTodo', () => {
  it('should toggle the completed state of a todo with a given ID', () => {
    const newTodos = [
      { id: 1, text: 'Buy milk', completed: false },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    setTodos(newTodos);

    const expectedTodos = [
      { id: 1, text: 'Buy milk', completed: true },
      { id: 2, text: 'Do laundry', completed: true },
      { id: 3, text: 'Walk the dog', completed: false }
    ];

    toggleTodo(1);

    expect(todos).toEqual(expectedTodos);
  });
});
