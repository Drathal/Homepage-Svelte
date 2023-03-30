import { validateFormData } from '../validate';
import { z } from 'zod';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

export type TodoAPI = z.infer<typeof todoSchema>;
export type PartialTodoAPI = Partial<TodoAPI>;

// we pass the TodoAPI type to validateFormData to ensure that the full schmema is used as a type not only a partial
// we need this for sveltekit to have the right type in page.svelte
export const validate = {
  todo: (form: FormData) => validateFormData<TodoAPI>(form, todoSchema),
  addTodo: (form: FormData) => validateFormData<TodoAPI>(form, todoSchema.pick({ text: true })),
  removeTodo: (form: FormData) => validateFormData<TodoAPI>(form, todoSchema.pick({ id: true })),
  toggleTodo: (form: FormData) => validateFormData<TodoAPI>(form, todoSchema.pick({ id: true }))
};
