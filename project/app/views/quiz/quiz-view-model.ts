import { Observable } from '@nativescript/core';

export interface Symptom {
  id: string;
  name: string;
  selected: boolean;
}

export class QuizViewModel extends Observable {
  private _duration: string = '';
  private _painLevel: number = 1;
  private _symptoms: Symptom[] = [
    { id: '1', name: 'Itching', selected: false },
    { id: '2', name: 'Burning', selected: false },
    { id: '3', name: 'Swelling', selected: false },
    { id: '4', name: 'Redness', selected: false }
  ];

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    if (this._duration !== value) {
      this._duration = value;
      this.notifyPropertyChange('duration', value);
    }
  }

  get painLevel(): number {
    return this._painLevel;
  }

  set painLevel(value: number) {
    if (this._painLevel !== value) {
      this._painLevel = value;
      this.notifyPropertyChange('painLevel', value);
    }
  }

  get symptoms(): Symptom[] {
    return this._symptoms;
  }

  onSubmit() {
    const assessment = {
      duration: this._duration,
      painLevel: this._painLevel,
      symptoms: this._symptoms.filter(s => s.selected)
    };
    
    console.log('Assessment submitted:', assessment);
    // TODO: Send assessment to backend
  }
}