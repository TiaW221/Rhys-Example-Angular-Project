import {Component, OnInit} from '@angular/core';
import {Title} from '../../Components/title/title';
import {MessageService} from '../../../Services/message-service/message-service';

@Component({
  selector: 'app-page2',
  imports: [
    Title,
  ],
  templateUrl: './page2.html',
  styleUrl: './page2.scss',
})
export class Page2 implements OnInit{
//initalises the savedMessage to an empty string
savedMessage: string = '';

constructor(private readonly messageService: MessageService) {}
  // on component initiation, it calls getMessage from the service
  // and the result stored in savedMessage which will be displayed on the page()
  ngOnInit() {
      this.savedMessage = this.messageService.getMessage();
    };
  }

