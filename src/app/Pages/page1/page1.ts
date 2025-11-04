import {Component, SimpleChanges} from '@angular/core';
import {Title} from '../../Components/title/title';
import {Button} from '../../Components/button/button';


@Component({
  selector: 'app-page1',
  imports: [
    Title, Button
  ],
  templateUrl: './page1.html',
  styleUrl: './page1.scss',
})

export class Page1 {
  onCounterChanged(counter: number) {
    console.log(counter);
  }
}

