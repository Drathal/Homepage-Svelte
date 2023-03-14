import { z } from 'zod';

export const todoSchema = z.object({
  id: z.coerce.number().positive(),
  text: z.string().min(1, { message: 'Todo text must be at least 1 character' }),
  completed: z.boolean()
});

export type TodoAPI = z.infer<typeof todoSchema>;

const todoSchemaPartial = todoSchema.partial();
type TodoAPIPartial = z.infer<typeof todoSchemaPartial>;

type FormData = {
  [k: string]: FormDataEntryValue;
};

interface SuccessResponse<T> {
  success: true;
  parsedData: T;
  errors: undefined;
}

interface ErrorResponse<T> {
  success: false;
  parsedData: undefined;
  errors: T;
}

type ValidationResponse<T, E> = SuccessResponse<T> | ErrorResponse<E>;

const validationResult = <Input, Output>(result: z.SafeParseReturnType<Input, Output>) => {
  if (!result.success)
    return { errors: result.error.flatten().fieldErrors } as ValidationResponse<
      Output,
      TodoAPIPartial // in +page.svelte we want all possible errors, not just the oone aff the schema.pick
    >;

  return { parsedData: result.data } as ValidationResponse<Output, undefined>;
};

const validateAddTodo = (formData: FormData) =>
  validationResult(todoSchema.pick({ text: true }).safeParse(formData));

const validateRemoveTodo = (formData: Partial<FormData>) =>
  validationResult(todoSchema.pick({ id: true }).safeParse(formData));

const validateToggleTodo = (formData: Partial<FormData>) =>
  validationResult(todoSchema.pick({ id: true }).safeParse(formData));

export const validate = {
  addTodo: validateAddTodo,
  removeTodo: validateRemoveTodo,
  toggleTodo: validateToggleTodo
};
