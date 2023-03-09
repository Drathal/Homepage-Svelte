import { fail } from '@sveltejs/kit';
import type { ErrorIssues, ErrorsObject } from './todoSchema';

export const getErrorsObject = (errors: ErrorIssues): ErrorsObject =>
  errors.reduce((obj, error, i) => {
    const currentError = {
      field: error.path[0],
      message: error.message
    };

    return {
      ...obj,
      [error.path[0]]: currentError
    };
  }, {});

export const handleErrors = (errors: ErrorIssues) => {
  const errorsObject = getErrorsObject(errors);
  return fail(400, { error: true, errors: errorsObject });
};

export const handleSuccess = () => ({ success: true });
