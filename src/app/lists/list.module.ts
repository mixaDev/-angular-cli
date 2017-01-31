import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { List1Component, List2Component, FormComponent, ListComponent, ItemComponent, List1Service, routs } from './index';
import { FlagDirective } from './list1/flag.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routs)
  ],
  declarations: [
    List1Component,
    List2Component,
    FormComponent,
    ListComponent,
    ItemComponent,
    FlagDirective
  ],
  providers: [List1Service]
})
export class ListsModule { }
