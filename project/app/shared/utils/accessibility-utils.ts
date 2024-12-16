import { AccessibilityService } from '@nativescript/core';

export function setupAccessibility(element: any, label: string, hint?: string) {
  if (element) {
    element.accessibilityLabel = label;
    if (hint) {
      element.accessibilityHint = hint;
    }
  }
}

export function announceScreenReader(message: string) {
  AccessibilityService.announce(message);
}

export function isScreenReaderEnabled(): boolean {
  return AccessibilityService.isScreenReaderEnabled();
}