import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-compo',
  templateUrl: './add-compo.component.html',
  styleUrls: ['./add-compo.component.css']
})
export class AddCompoComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title!: string;
  desc!: string;
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  constructornstructor(){ }
  OnInit(): void { }

  onSubmit(){
    const todo = {
    sno:2,
    title:this.title,
    desc:this.desc,
    active:true
    }
  this.todoAdd.emit(todo);
  }
}

