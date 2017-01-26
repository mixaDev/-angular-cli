import { Component, OnInit } from '@angular/core';

import { Todo } from '../../index';
import { List1Service } from '../list1.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  todos: Todo[];

  constructor(private list1Service: List1Service) {
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.list1Service.getTodos();
  }

  delete(todo: Todo){
    this.list1Service.deleteTodo(todo);
  }

  toggle(todo: Todo){
    this.list1Service.toggleTodo(todo);
  }
}
