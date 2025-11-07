import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Title} from '../../Components/title/title';
import {MessageService} from '../../../Services/message-service/message-service';
import {UpperCasePipe} from '@angular/common';



@Component({
  selector: 'app-andy-page',
  imports: [
    Title,
    FormsModule,
    UpperCasePipe,
  ],
  templateUrl: './andy-page.html',
  styleUrl: './andy-page.scss',
})

export class AndyPage {

  task: string = '';

  // setting the message to an empty string
  message: string = '';

  /* used to inject the message service into the component
   it's readonly so it cannot be reassigned after being set in the constructor
  it declares the property named messageService of type MessageService

  easier to understand for my brain vv
  When you create this component, please give me an instance of MessageService,
  and store it in a private, readonly property called messageService, so I can use it inside this class.
  */
  constructor(private readonly messageService: MessageService) {
  }

  //this is a function to save the message
  saveMessage() {
    this.messageService.setMessage(this.message);

  }

  quotes = [
    'Learning never exhausts the mind.',
    'Code is like humor. When you have to explain it, it’s bad.',
    'Experience is the name everyone gives to their mistakes.'
  ];

  @Input() randomQuote!: string;

  callRandomQuote(min: number, max: number) {
    // This line is good for dynamically generating a random number between min and max
    // like between 5 - 10
    // let randomNum = Math.round(Math.random() * (max - min)) + min;
    //  let randomString = this.quotes[randomNum];
    // console.log(randomNum1);
    // console.log(randomString);
  }

  callRandomQuote2() {
    let randomNum1 = Math.round(Math.random() * (this.quotes.length - 1));
    let randomString = this.quotes[randomNum1];

    this.randomQuote = randomString;

    console.log(randomNum1);
    console.log(randomString);

  }
}

