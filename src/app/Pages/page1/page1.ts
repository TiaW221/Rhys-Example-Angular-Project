import {Component, inject, OnInit} from '@angular/core';
import {Title} from '../../Components/title/title';
import {Button} from '../../Components/button/button';
import {UserService} from '../../../Services/UserService/UserServices';
import {
  CurrencyPipe,
  DatePipe, DecimalPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe
} from '@angular/common';


@Component({
  selector: 'app-page1',
  imports: [
    Title, Button, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, PercentPipe, CurrencyPipe, SlicePipe, DecimalPipe
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
// Create a variable meetingDate = new Date('2025-12-25T14:30:00')
  meetingDate = new Date('2025-12-25T14:30:00');
currencyValue = '1.50';

// <--In your component:-->
//   <!--price = 1234.5;-->
//   <!--discount = 0.15;-->
  price = 1234.5;
  discount = 0.15;
  finalPrice = this.price - (this.price * this.discount);
  // <!--4. Customising Output-->
  // <!--Create an array:-->
  // <!--students = ['Alice', 'Bob', 'Charlie', 'Daisy', 'Ethan'];-->
  students = ['Alice', 'Bob', 'Charlie', 'Daisy', 'Ethan']
  quote = 'angular pipes make data formatting simple'
    ngOnInit() {

      console.log(this.userService.getName('Tia'));
    }
  }


