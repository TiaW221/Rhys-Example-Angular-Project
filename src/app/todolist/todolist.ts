import { Component } from '@angular/core';
import {Title} from '../Components/title/title';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
interface Task {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-todolist',
  imports: [
    Title,
    FormsModule,
    NgForOf
  ],
  templateUrl: './todolist.html',
  styleUrl: './todolist.scss',
})
export class Todolist {
  // 3. To-Do List Component
  // Create a todo-list component that:
  // Has an input field and an “Add Task” button.
  // Displays a list of tasks using *ngFor.
  // Adds a tick next to tasks when clicked.
  // Tip: Use an array like tasks = [{ text: 'Learn Pipes', done: false }] and toggle done in the template.


  // newTask: string = '';
  // tasks: { name: string; completed: boolean }[] = [];
  //
  // addTask() {
  //   this.tasks.push({ name: this.newTask, completed: false });
  //   this.newTask = '';
  // }
  //
  // toggleTask(task: { name: string; completed: boolean }) {
  //   task.completed = !task.completed;
  // }

  // ----------------------------------------------------------------------
  newTask: string = '';
  tasks: { id: number; name: string; completed: boolean }[] = [];
  nextId: number = 1;

  addTask() {
    const Task = this.newTask;
    if (Task) {
      this.tasks.push({
        id: this.nextId + 1,
        name: Task,
        completed: false
      });
      this.newTask = '';
    }
  }

  toggleTask(task: { id: number; name: string; completed: boolean }) {
    task.completed = !task.completed;
  }


}


