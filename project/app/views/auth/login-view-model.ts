import { Observable } from '@nativescript/core';

export class LoginViewModel extends Observable {
  constructor() {
    super();
  }

  onSignIn() {
    // TODO: Implement Clerk authentication
    console.log('Sign in tapped');
  }

  onSignUp() {
    // TODO: Implement Clerk registration
    console.log('Sign up tapped');
  }
}