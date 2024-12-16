import { Observable } from '@nativescript/core';
import { Camera } from '@nativescript/camera';
import * as imagepicker from '@nativescript/imagepicker';

export class CameraViewModel extends Observable {
  private _capturedImage: string;

  constructor() {
    super();
  }

  async onTakePhoto() {
    try {
      const image = await Camera.takePicture();
      this.set('capturedImage', image.android || image.ios);
      this.analyzeImage();
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  async onSelectPhoto() {
    const context = imagepicker.create({
      mode: 'single'
    });

    try {
      const selection = await context.present();
      if (selection.length > 0) {
        this.set('capturedImage', selection[0].android || selection[0].ios);
        this.analyzeImage();
      }
    } catch (error) {
      console.error('Error selecting photo:', error);
    }
  }

  private async analyzeImage() {
    // TODO: Implement TensorFlow.js image analysis
    console.log('Analyzing image...');
  }
}