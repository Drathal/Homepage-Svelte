import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { type PartialTodoAPI, todoSchema } from '$lib/schema/todo';

export const load: PageServerLoad = async () => ({ todos: getTodos() });

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const zodResult = todoSchema
      .pick({ text: true })
      .safeParse(Object.fromEntries(await request.formData()));

    if (!zodResult.success) {
      return fail(400, {
        success: false,
        errors: zodResult.error.flatten().fieldErrors as PartialTodoAPI,
        form: 'addTodo'
      });
    }

    addTodo(zodResult.data.text);

    return { success: true, form: 'addTodo' };
  },

  removeTodo: async ({ request }) => {
    const zodResult = todoSchema
      .pick({ id: true })
      .safeParse(Object.fromEntries(await request.formData()));

    if (!zodResult.success)
      return fail(400, {
        success: false,
        errors: zodResult.error.flatten().fieldErrors as PartialTodoAPI,
        form: 'removeTodo'
      });

    removeTodo(zodResult.data.id);

    return { success: true, form: 'addTodo' };
  },

  toggleTodo: async ({ request }) => {
    const zodResult = todoSchema
      .pick({ id: true })
      .safeParse(Object.fromEntries(await request.formData()));

    if (!zodResult.success)
      return fail(400, {
        success: false,
        errors: zodResult.error.flatten().fieldErrors as PartialTodoAPI,
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
