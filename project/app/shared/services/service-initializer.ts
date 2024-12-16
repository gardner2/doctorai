import { AuthService } from './auth.service';
import { ImageAnalysisService } from './image-analysis.service';
import { StorageService } from './storage.service';
import { AnalyticsService } from './analytics.service';
import { PaymentService } from './payment.service';

let authService: AuthService;
let imageAnalysisService: ImageAnalysisService;
let storageService: StorageService;
let analyticsService: AnalyticsService;
let paymentService: PaymentService;

export async function initializeServices() {
  storageService = new StorageService();
  authService = new AuthService();
  imageAnalysisService = new ImageAnalysisService();
  analyticsService = new AnalyticsService();
  paymentService = new PaymentService();

  // Initialize ML model
  await imageAnalysisService.loadModel();
}

export function getAuthService(): AuthService {
  return authService;
}

export function getImageAnalysisService(): ImageAnalysisService {
  return imageAnalysisService;
}

export function getStorageService(): StorageService {
  return storageService;
}

export function getAnalyticsService(): AnalyticsService {
  return analyticsService;
}

export function getPaymentService(): PaymentService {
  return paymentService;
}