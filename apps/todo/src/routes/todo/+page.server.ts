import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { validate, type PartialTodoAPI } from '$lib/schema/todo';

export const load: PageServerLoad = async () => ({ todos: getTodos() });

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const result = validate.addTodo(Object.fromEntries(await request.formData()));

    if (!result.success) {
      return fail(400, {
        success: false,
        errors: result.errors as PartialTodoAPI // TODO: fix this
      });
    }

    addTodo(result.parsedData.text);

    return { success: true, e: {} };
  },

  removeTodo: async ({ request }) => {
    const result = validate.removeTodo(Object.fromEntries(await request.formData()));

    if (!result.success)
      return fail(400, {
        success: false,
        form: 'addTodo',
        errors: result.errors as PartialTodoAPI
      });

    removeTodo(result.parsedData.id);

    return { success: true, form: 'addTodo' };
  },

  toggleTodo: async ({ request }) => {
    const result = validate.removeTodo(Object.fromEntries(await request.formData()));

    if (!result.success)
      return fail(400, {
        success: false,
        form: 'toggleTodo',
        errors: result.errors as PartialTodoAPI
      });

    toggleTodo(result.parsedData.id);

    return { success: true, form: 'toggleTodo' };
  },

  clearTodos: () => {
    clearTodos();
    return { success: true };
  }
};
