import { Connectivity } from '@nativescript/core';

export function isConnected(): boolean {
  const connectionType = Connectivity.getConnectionType();
  return connectionType !== Connectivity.connectionType.none;
}

export function isWiFiConnected(): boolean {
  return Connectivity.getConnectionType() === Connectivity.connectionType.wifi;
}

export async function waitForConnection(timeout: number = 30000): Promise<boolean> {
  return new Promise((resolve) => {
    if (isConnected()) {
      resolve(true);
      return;
    }

    const timeoutId = setTimeout(() => resolve(false), timeout);
    
    const connectionCallback = () => {
      if (isConnected()) {
        Connectivity.removeEventListener(connectionCallback);
        clearTimeout(timeoutId);
        resolve(true);
      }
    };

    Connectivity.addEventListener(connectionCallback);
  });
}