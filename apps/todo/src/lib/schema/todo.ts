import { z } from 'zod';
import { getValidationResult } from '$lib/validate';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

export type TodoAPI = z.infer<typeof todoSchema>;
export type PartialTodoAPI = Partial<TodoAPI>;

const addTodo = (formData: PartialTodoAPI) =>
  getValidationResult(todoSchema.pick({ text: true }).safeParse(formData));

const removeTodo = (formData: PartialTodoAPI) =>
  getValidationResult(todoSchema.pick({ id: true }).safeParse(formData));

const toggleTodo = (formData: PartialTodoAPI) =>
  getValidationResult(todoSchema.pick({ id: true }).safeParse(formData));

export const validate = {
  addTodo,
  removeTodo,
  toggleTodo
};
