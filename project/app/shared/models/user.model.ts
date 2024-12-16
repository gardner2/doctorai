export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  subscriptionStatus: 'free' | 'premium';
  lastLogin: Date;
}

export interface UserPreferences {
  notifications: boolean;
  language: string;
  theme: 'light' | 'dark';
}