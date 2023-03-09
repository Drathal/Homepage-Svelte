import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';

import { addTodo, clearTodos, getTodos, removeTodo, toggleTodo } from '$lib/server/database';
import { addTodoSchema, removeTodoSchema, toggleTodoSchema } from '$lib/todoSchema';
import { handleErrors, handleSuccess } from '$lib/todoHandler';

export const load: PageServerLoad = async () => {
  const todos = getTodos();
  return { todos };
};

export const actions: Actions = {
  addTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const zodData = addTodoSchema.safeParse(formData);

    if (!zodData.success) return handleErrors(zodData.error.errors);

    addTodo(zodData.data.text);

    return handleSuccess();
  },

  removeTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const zodData = removeTodoSchema.safeParse(formData);

    console.dir(zodData);

    if (!zodData.success) return handleErrors(zodData.error.errors);

    removeTodo(zodData.data.id);

    return handleSuccess();
  },
  clearTodos: () => {
    clearTodos();
    return handleSuccess();
  },
  toggleTodo: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const zodData = toggleTodoSchema.safeParse(formData);

    if (!zodData.success) return handleErrors(zodData.error.errors);

    toggleTodo(zodData.data.id);

    return handleSuccess();
  }
};
