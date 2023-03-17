import { z } from 'zod';
import { validationResult } from '$lib/form';

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username must be at least 1 character' }),
  password: z.string().min(1, { message: 'Password must be at least 1 character' })
});

export type LoginAPI = z.infer<typeof loginSchema>;
type PartialLoginAPI = Partial<LoginAPI>;

const validateLogin = (formData: PartialLoginAPI) =>
  validationResult<PartialLoginAPI>(loginSchema.safeParse(formData));

export const validate = {
  login: validateLogin
};
