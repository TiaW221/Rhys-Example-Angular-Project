import {Component, inject, OnInit, SimpleChanges} from '@angular/core';
import {Title} from '../../Components/title/title';
import {Button} from '../../Components/button/button';
import {UserService} from '../../../Services/UserService/UserServices';
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';


@Component({
  selector: 'app-page1',
  imports: [
    Title, Button, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe, CurrencyPipe, SlicePipe
  ],
  templateUrl: './page1.html',
  styleUrl: './page1.scss',
})

export class Page1 implements OnInit {
  onCounterChanged(counter: number) {
    console.log(counter);
  }
  private readonly userService = inject(UserService);

  today = new Date();

currencyValue = '1.50';
    ngOnInit() {

      console.log(this.userService.getName('Tia'));
    }
  }


