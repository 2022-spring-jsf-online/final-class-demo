import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  constructor() { }
  
  // Read only, TS 'getter' property...
  get greeting() {
    return `Hello ${this._who}`;
  }

  private _who = "";

  set who(value: string) {
    this._who = value;
  }
}
