import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { validateAddTodo, validateRemoveTodo, validateToggleTodo } from '$lib/todoSchema';

export const load: PageServerLoad = async () => {
  const todos = getTodos();
  return { todos };
};

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors } = validateAddTodo(formData);

    if (errors) return fail(400, { success: false, form: 'addTodo', errors });

    addTodo(parsedData.text);

    return { success: true, form: 'addTodo' };
  },

  removeTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors } = validateRemoveTodo(formData);

    if (errors) return fail(400, { success: false, form: 'removeTodo', errors });

    removeTodo(parsedData.id);

    return { success: true, form: 'removeTodo' };
  },

  clearTodos: () => {
    clearTodos();
    return { success: true };
  },

  toggleTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors } = validateToggleTodo(formData);

    if (errors) return fail(400, { success: false, form: 'toggleTodo', errors });

    toggleTodo(parsedData.id);

    return { success: true, form: 'toggleTodo' };
  }
};
