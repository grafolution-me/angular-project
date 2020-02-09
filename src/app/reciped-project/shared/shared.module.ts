import {NgModule} from '@angular/core';
import {LoadingSpinnerComponent} from './spinner/loading-spinner';
import {DropdownDirectiveDirective} from './dropdown-directive.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    DropdownDirectiveDirective,
  ],
  imports: [CommonModule],
  exports: [
    LoadingSpinnerComponent,
    DropdownDirectiveDirective,
    CommonModule
  ]
})
export class SharedModule {

}
