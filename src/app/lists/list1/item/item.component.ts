import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../index';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.less']
})
export class ItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() delete2= new EventEmitter();
  @Output() toggle2= new EventEmitter();

  constructor() {
  }

  ngOnInit(){
  }

  onToggle(){
    this.toggle2.emit(this.todo);
  }

  onDelete(){
    this.delete2.emit(this.todo);
  }
}
