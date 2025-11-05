import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserService} from '../Services/UserService/UserServices';
import {DataService} from '../Services/DataService/DataService';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('rhys-angular-project');

  // this is the modern way of injecting a service into another class
  private readonly userService = inject(UserService);

// This is the old way of injecting a service into another class
constructor(
  private readonly dataService: DataService,
) {}

  ngOnInit() {

    console.log(this.userService.sayHello());
    console.log(this.dataService.sayGoodbye());
  }
}
