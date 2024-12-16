import { Observable } from '@nativescript/core';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export class ChatViewModel extends Observable {
  private _messages: Message[] = [];
  private _messageText: string = '';

  get messages(): Message[] {
    return this._messages;
  }

  get messageText(): string {
    return this._messageText;
  }

  set messageText(value: string) {
    if (this._messageText !== value) {
      this._messageText = value;
      this.notifyPropertyChange('messageText', value);
    }
  }

  async onSendMessage() {
    if (!this._messageText.trim()) return;

    const userMessage: Message = {
      text: this._messageText,
      isUser: true,
      timestamp: new Date()
    };

    this._messages.push(userMessage);
    this.notifyPropertyChange('messages', this._messages);
    this.messageText = '';

    // TODO: Implement AI response
    await this.getAIResponse(userMessage.text);
  }

  private async getAIResponse(userMessage: string) {
    // Simulate AI response
    const aiMessage: Message = {
      text: 'I understand your concern. Based on the image and symptoms you\'ve shared, I recommend consulting a healthcare professional.',
      isUser: false,
      timestamp: new Date()
    };

    this._messages.push(aiMessage);
    this.notifyPropertyChange('messages', this._messages);
  }
}