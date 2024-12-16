import { handleError } from '../utils/error-utils';
import { getAnalyticsService } from '../services/service-initializer';

export function ErrorHandler() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        return await originalMethod.apply(this, args);
      } catch (error) {
        const appError = handleError(error);
        getAnalyticsService().logError(appError);
        throw appError;
      }
    };

    return descriptor;
  };
}