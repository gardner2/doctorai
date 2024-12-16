export const Config = {
  API: {
    BASE_URL: 'https://api.doctor.ai',
    TIMEOUT: 30000
  },
  AUTH: {
    CLERK_KEY: process.env.CLERK_PUBLISHABLE_KEY || 'YOUR_CLERK_PUBLISHABLE_KEY'
  },
  PAYMENT: {
    STRIPE_KEY: process.env.STRIPE_PUBLISHABLE_KEY || 'YOUR_STRIPE_PUBLISHABLE_KEY'
  },
  ML: {
    MODEL_PATH: 'assets/model/skin-analysis-model.json',
    IMAGE_SIZE: 224
  }
};