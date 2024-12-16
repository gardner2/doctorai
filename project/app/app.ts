import { Application } from '@nativescript/core';
import { initializeServices } from './shared/services/service-initializer';

// Initialize all services before starting the app
initializeServices().catch(error => {
  console.error('Failed to initialize services:', error);
});

Application.run({ moduleName: 'app-root' });