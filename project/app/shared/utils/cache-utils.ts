import { knownFolders } from '@nativescript/core';
import { StorageService } from '../services/storage.service';

export class CacheManager {
  private static readonly CACHE_FOLDER = knownFolders.temp().getFolder('image_cache');
  private static readonly MAX_CACHE_AGE = 24 * 60 * 60 * 1000; // 24 hours

  static async cacheImage(imageId: string, imageData: any): Promise<string> {
    const path = this.CACHE_FOLDER.path + '/' + imageId;
    await this.CACHE_FOLDER.writeSync(path, imageData);
    return path;
  }

  static async getCachedImage(imageId: string): Promise<string | null> {
    const path = this.CACHE_FOLDER.path + '/' + imageId;
    if (this.CACHE_FOLDER.contains(path)) {
      return path;
    }
    return null;
  }

  static async clearOldCache(): Promise<void> {
    const files = this.CACHE_FOLDER.getEntities();
    const now = Date.now();

    for (const file of files) {
      const stats = await file.getStats();
      if (now - stats.modificationTime.getTime() > this.MAX_CACHE_AGE) {
        await file.remove();
      }
    }
  }
}