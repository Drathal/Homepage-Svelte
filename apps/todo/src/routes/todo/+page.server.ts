import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { validate } from '$lib/schema/todo';

export const load: PageServerLoad = async () => ({ todos: getTodos() });

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const zodResult = validate.addTodo(await request.formData());

    if (!zodResult.success) {
      return fail(400, {
        ...zodResult,
        form: 'addTodo'
      });
    }

    addTodo(zodResult.data.text);

    return { ...zodResult, form: 'addTodo' };
  },

  removeTodo: async ({ request }) => {
    const zodResult = validate.removeTodo(await request.formData());

    if (!zodResult.success)
      return fail(400, {
        ...zodResult,
        form: 'removeTodo'
      });

    removeTodo(zodResult.data.id);

    return { success: true, form: 'addTodo' };
  },

  toggleTodo: async ({ request }) => {
    const zodResult = validate.toggleTodo(await request.formData());

    if (!zodResult.success)
      return fail(400, {
        ...zodResult,
        form: 'toggleTodo'
      });

    toggleTodo(zodResult.data.id);

    return { success: true, form: 'toggleTodo' };
  },

  clearTodos: () => {
    clearTodos();
    return { success: true, form: 'clearTodos' };
  }
};
