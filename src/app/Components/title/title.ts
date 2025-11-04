import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-title',
  imports: [ RouterLink],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
@Input()
titlePage: string = "My Example";
}
