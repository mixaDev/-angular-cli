import { Component, OnInit } from '@angular/core';

import { Todo, List1Service } from '../../index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  todos: Todo[];

  constructor(private list1Service: List1Service) {
    this.todos = [];
    console.log('constructor')
  }

  ngOnInit() {
    this.todos = this.list1Service.getTodos();
    console.log('ngOnInit')
  }

  // delete(todo: Todo){
  //   this.list1Service.deleteTodo(todo);
  // }
  delete = this.list1Service.deleteTodo;

  // toggle(todo: Todo){
  //   this.list1Service.toggleTodo(todo);
  // }

  toggle = this.list1Service.toggleTodo;
}
