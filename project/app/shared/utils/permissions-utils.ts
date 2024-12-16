import { Camera, requestCameraPermissions } from '@nativescript/camera';
import { Permissions } from '@nativescript/core';

export async function ensureCameraPermissions(): Promise<boolean> {
  try {
    const granted = await requestCameraPermissions();
    return granted;
  } catch (error) {
    console.error('Error requesting camera permissions:', error);
    return false;
  }
}

export async function ensureStoragePermissions(): Promise<boolean> {
  try {
    const result = await Permissions.requestPermission('storage');
    return result === 'authorized';
  } catch (error) {
    console.error('Error requesting storage permissions:', error);
    return false;
  }
}