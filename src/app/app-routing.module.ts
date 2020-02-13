import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {WelcomeComponent} from './core/welcome.component';
import {DirectivesComponent} from './directives-project/directives.component';


const routes: Routes = [
  { path: '', 
    pathMatch: 'full', 
    component: WelcomeComponent},
  { path: 'directive', component:  DirectivesComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
