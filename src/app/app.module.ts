import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ListsModule, routs, List1Service } from './lists/index';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ListsModule,
    RouterModule.forRoot(routs)
  ],
  providers: [List1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
