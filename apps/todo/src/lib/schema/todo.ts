import { z } from 'zod';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

export type TodoAPI = z.infer<typeof todoSchema>;
export type PartialTodoAPI = Partial<TodoAPI>;
