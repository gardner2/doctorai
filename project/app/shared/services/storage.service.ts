import { SecureStorage } from '@nativescript/secure-storage';

export class StorageService {
  private secureStorage: SecureStorage;

  constructor() {
    this.secureStorage = new SecureStorage();
  }

  async saveSecure(key: string, value: string): Promise<void> {
    await this.secureStorage.set(key, value);
  }

  async getSecure(key: string): Promise<string | null> {
    try {
      return await this.secureStorage.get(key);
    } catch {
      return null;
    }
  }

  async removeSecure(key: string): Promise<void> {
    await this.secureStorage.remove(key);
  }
}