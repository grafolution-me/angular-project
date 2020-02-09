import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './core/welcome.component';
import {DirectivesComponent} from './directives-project/directives.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'directive', component:  DirectivesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
