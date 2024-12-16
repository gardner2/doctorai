import { ImageSource, ImageAsset } from '@nativescript/core';

export async function preprocessImage(image: ImageAsset): Promise<ImageSource> {
  try {
    const imageSource = await ImageSource.fromAsset(image);
    return imageSource;
  } catch (error) {
    console.error('Error preprocessing image:', error);
    throw error;
  }
}

export async function resizeImage(imageSource: ImageSource, targetWidth: number, targetHeight: number): Promise<ImageSource> {
  try {
    return imageSource.resize(targetWidth, targetHeight);
  } catch (error) {
    console.error('Error resizing image:', error);
    throw error;
  }
}