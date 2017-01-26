import { Injectable } from '@angular/core';

import { Todo, todos } from '../index';

@Injectable()
export class List1Service {
  todos: Todo[] = todos;

  constructor() { }

  getTodos(): Todo[]{
    return this.todos;
  }

  createTodo(title: string) {
    let todo = new Todo(title)
    this.todos.push(todo)
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.closed = !todo.closed
  }
}
