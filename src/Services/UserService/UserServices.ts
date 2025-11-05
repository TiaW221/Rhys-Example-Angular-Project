import {Injectable} from '@angular/core';

/**
* Services are designed for housing common code in relation to a topic
 * e.g. A 'UserService' would be a helpful method pertaining to users specifically
 * Such as Creating a user or Retrieving a user's details
 * */

@Injectable ({
  providedIn: 'root',
})
export class UserService {
  sayHello() {
    return "Hello";
  }
  getName(name: string) {
    return `Hello, ${name}!`;
  }
}



