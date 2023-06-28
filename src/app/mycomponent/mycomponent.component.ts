import { Component } from '@angular/core';
import { Todo } from '../todo';
import { AddCompoComponent } from '../add-compo/add-compo.component';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
  todos: Todo[];
  constructor(){
    this.todos=[
      {
      sno:1,
      title:"Hello",
      desc:"youtube",
      active:true
    },
    {
      sno:2,
      title:"Hi",
      desc:"BeeTubes",
      active:true
    }
  ]
}
deleteTodo(todo:Todo):void{
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index,1);
}
AddTodo(todo:Todo):void{
  console.log(todo);
  this.todos.push(todo);
}
}
