import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveDirectiveDirective} from './directives/reactive-directive.directive';
import {DirectivesComponent} from "./directives.component";



@NgModule({
  declarations: [
    ReactiveDirectiveDirective,
    DirectivesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveDirectiveDirective,
    DirectivesComponent
  ]
})
export class DirectivesModule { }
