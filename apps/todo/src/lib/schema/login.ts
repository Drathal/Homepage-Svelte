import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(1, { message: 'Username must be at least 1 character' }),
  password: z.string().min(1, { message: 'Password must be at least 1 character' })
});

export type LoginAPI = z.infer<typeof loginSchema>;
export type PartialLoginAPI = Partial<LoginAPI>;
