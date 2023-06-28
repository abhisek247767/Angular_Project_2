import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})

export class TodoItemsComponent {
  @Input() todo !:Todo;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

onclick(todo:Todo) {
  this.todoDelete.emit(todo);
  console.log("Todo clicked");
  }
}
