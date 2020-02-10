import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list-edit/shopping-list-edit.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent
  }
]
@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
  ],
  imports: [FormsModule, 
    SharedModule, 
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [
     RouterModule
    ]
})
export class ShoppingListModule {
}
