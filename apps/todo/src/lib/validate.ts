import type { z } from 'zod';

type Success<T> = {
  success: true;
  data: T;
};

type Failure<T> = {
  success: false;
  errors: Partial<T>;
};

export function validateFormData<T>(formData: FormData, schema: z.Schema): Success<T> | Failure<T> {
  const safeParseResult = schema.safeParse(Object.fromEntries(formData));

  if (safeParseResult.success) {
    return { success: true, data: safeParseResult.data } as Success<T>;
  } else {
    return { success: false, errors: safeParseResult.error.flatten().fieldErrors } as Failure<T>;
  }
}
