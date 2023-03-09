import { z } from 'zod';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

// completed: z.boolean()
// completed: z.enum(['on'])

export const addTodoSchema = todoSchema.pick({ text: true });
export const removeTodoSchema = todoSchema.pick({ id: true });
export const toggleTodoSchema = todoSchema.pick({ id: true });

export type ErrorIssues = z.ZodIssue[];
export type TodoAPI = z.TypeOf<typeof todoSchema>;
export type ErrorsObject = {
  [K in keyof TodoAPI]?: {
    field: K;
    message: string;
  };
};
