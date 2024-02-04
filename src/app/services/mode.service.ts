import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

  constructor() {};

  darkMode = false;

  toggleMode() {
    this.darkMode = !this.darkMode;
    this.applyMode();
  }

  applyMode() {
    const body = document.getElementsByTagName('body')[0];
    if (this.darkMode) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

};