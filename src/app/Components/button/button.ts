import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  counter = 0;

  @Output()
  changeCounter = new EventEmitter<number>();

  addToCount() {
  this.counter += 1
  this.changeCounter.emit(this.counter);
  }
}
