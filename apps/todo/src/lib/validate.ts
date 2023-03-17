import type { z } from 'zod';

interface SuccessResponse<T> {
  success: true;
  parsedData: T;
}

interface ErrorResponse<T> {
  success: false;
  errors: T;
}

type ValidationResponse<T, P> = SuccessResponse<P> | ErrorResponse<T>;

export const getValidationResult = <T, P>(
  result: z.SafeParseReturnType<T, P>
): ValidationResponse<T, P> => {
  if (result.success === false) {
    const errorResult: ErrorResponse<T> = {
      success: false,
      errors: result.error.flatten().fieldErrors as T
    };

    return errorResult;
  }

  const successResult: SuccessResponse<P> = {
    success: true,
    parsedData: result.data as P
  };

  return successResult;
};
