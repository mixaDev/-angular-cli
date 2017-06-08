import { Injectable } from '@angular/core';

import { Todo, todos } from '../index';

let todosPromise = Promise.resolve(todos);

@Injectable()
export class List1Service {
  data = {
    todos: []
  };

  constructor() { }

  getTodos(){
    return todosPromise.then((resolve:Todo[]) => {
      this.data.todos = resolve;
    });
  }

  createTodo(title: string) {
    let todo = new Todo(title);
    this.data.todos.push(todo)
  }

  deleteTodo(todo: Todo) {
    let index = this.data.todos.indexOf(todo);

    if(index > -1) {
      this.data.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.closed = !todo.closed
  }
}
