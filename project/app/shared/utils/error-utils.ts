export class AppError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'AppError';
  }
}

export function handleError(error: any): AppError {
  if (error instanceof AppError) {
    return error;
  }
  
  return new AppError(
    error.message || 'An unexpected error occurred',
    error.code || 'UNKNOWN_ERROR'
  );
}