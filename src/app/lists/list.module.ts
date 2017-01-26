import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { List1Component, List2Component, FormComponent, ListComponent, ItemComponent } from './index';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    List1Component,
    List2Component,
    FormComponent,
    ListComponent,
    ItemComponent
  ]
})
export class ListsModule { }
