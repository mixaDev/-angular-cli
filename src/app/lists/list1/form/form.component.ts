import { Component, OnInit } from '@angular/core';

import { List1Service } from '../../index';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  title = '';

  constructor(private list1Service: List1Service) { }

  ngOnInit() {
  }

  onSubmit(){
    this.list1Service.createTodo(this.title);
  }
}
