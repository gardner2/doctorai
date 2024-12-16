import { ImageSource } from '@nativescript/core';
import * as tf from '@tensorflow/tfjs';

export class ImageProcessorService {
  async preprocessImage(imageSource: ImageSource): Promise<tf.Tensor3D> {
    try {
      // Convert image to tensor and normalize
      const imageTensor = tf.browser.fromPixels(imageSource);
      const resized = tf.image.resizeBilinear(imageTensor, [224, 224]);
      const normalized = resized.div(255.0);
      return normalized;
    } catch (error) {
      console.error('Error preprocessing image:', error);
      throw error;
    }
  }

  async augmentImage(tensor: tf.Tensor3D): Promise<tf.Tensor3D> {
    // Apply basic augmentation for better analysis
    return tf.tidy(() => {
      const brightened = tf.image.adjustBrightness(tensor, 0.1);
      return tf.image.adjustContrast(brightened, 1.1);
    });
  }
}