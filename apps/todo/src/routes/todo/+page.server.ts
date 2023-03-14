import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { validate } from '$lib/todoSchema';

export const load: PageServerLoad = async () => ({ todos: getTodos() });

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors, success } = validate.addTodo(formData);

    if (!success) return fail(400, { success: false, form: 'addTodo', errors });

    addTodo(parsedData.text);

    return { success: true, form: 'addTodo' };
  },

  removeTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors, success } = validate.removeTodo(formData);

    if (!success) return fail(400, { success: false, form: 'removeTodo', errors });

    removeTodo(parsedData.id);

    return { success: true, form: 'removeTodo' };
  },

  toggleTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const { parsedData, errors, success } = validate.toggleTodo(formData);

    if (!success) return fail(400, { success: false, form: 'toggleTodo', errors });

    toggleTodo(parsedData.id);

    return { success: true, form: 'toggleTodo' };
  },

  clearTodos: () => {
    clearTodos();
    return { success: true };
  }
};
