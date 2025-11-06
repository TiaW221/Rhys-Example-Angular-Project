import { Injectable } from '@angular/core';
import { Input} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  // Declare a variable called currentMessage and set its value to an empty string.
  @Input()
  currentMessage: string = '';

  // takes a message and sets it to the currentMessage variable.
  // This is how I'm storing message on the service
  setMessage(message: string) {
    this.currentMessage = message;
  }

  // this returns the stored message
  getMessage() {
    return this.currentMessage;
  }
}
