import { List1Component, List2Component } from './index';

export const routs = [
  { path: '', redirectTo: 'list1', pathMatch: 'full'},
  { path: 'list1', component: List1Component},
  { path: 'list2', component: List2Component}
];
