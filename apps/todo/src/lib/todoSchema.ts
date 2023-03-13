import { z } from 'zod';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

export type TodoAPI = z.infer<typeof todoSchema>;

type FormData = {
  [k: string]: FormDataEntryValue;
};

const validationResult = <T>(result: z.SafeParseReturnType<unknown, T>) => {
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  return { parsedData: result.data };
};

export const validateAddTodo = (formData: FormData) =>
  validationResult(todoSchema.pick({ text: true }).safeParse(formData));

export const validateRemoveTodo = (formData: Partial<FormData>) =>
  validationResult(todoSchema.pick({ id: true }).safeParse(formData));

export const validateToggleTodo = (formData: Partial<FormData>) =>
  validationResult(todoSchema.pick({ id: true }).safeParse(formData));
