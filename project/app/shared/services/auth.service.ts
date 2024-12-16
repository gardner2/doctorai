import { SecureStorage } from '@nativescript/secure-storage';
import { AppConfig } from '../config/app.config';

export class AuthService {
  private secureStorage: SecureStorage;

  constructor() {
    this.secureStorage = new SecureStorage();
  }

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      // TODO: Implement Clerk authentication
      return true;
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    }
  }

  async signOut(): Promise<void> {
    await this.secureStorage.remove('auth_token');
  }

  async isAuthenticated(): Promise<boolean> {
    const token = await this.secureStorage.get('auth_token');
    return !!token;
  }
}