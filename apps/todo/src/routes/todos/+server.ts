import { addTodo, removeTodo } from '$lib/server/database';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

type Data = {
  success: boolean;
  errors: Record<string, string>;
};

export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.json();
  const todo = String(formData.get('todo'));
  const data: Data = { success: false, errors: {} };

  if (!todo) {
    data.errors.todo = 'Todo is required';
    return json(data, { status: 400 });
  }

  addTodo(todo);
  data.success = true;

  return json(data);
};

export const DELETE: RequestHandler = async ({ request }) => {
  const formData = await request.json();
  const id = Number(formData.get('id'));
  const data: Data = { success: false, errors: {} };

  if (!id) {
    data.errors.id = 'Id is required';
    return json(data, { status: 400 });
  }

  removeTodo(id);
  data.success = true;

  return json(data);
};
