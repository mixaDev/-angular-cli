import { Component, OnInit } from '@angular/core';

import { List1Service } from '../../index';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  data;

  constructor(private list1Service: List1Service) {}

  ngOnInit() {
    this.data = this.list1Service.data;
    this.list1Service.getTodos();
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
