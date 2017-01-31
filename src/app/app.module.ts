import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';

import { ListsModule } from './lists/index';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ListsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'list1', pathMatch: 'full'},
    ])
  ],
  declarations: [
    AppComponent,
    TodosComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
