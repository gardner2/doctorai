import { Frame } from '@nativescript/core';

export class NavigationService {
  static navigate(page: string, context?: any) {
    Frame.topmost().navigate({
      moduleName: `views/${page}/${page}-page`,
      context
    });
  }

  static goBack() {
    Frame.topmost().goBack();
  }
}