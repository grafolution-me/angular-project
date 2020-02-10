import {NgModule} from '@angular/core';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes.component';
import {RecipedProjectComponent} from '../reciped-project.component';
import {HeaderComponent} from '../components/header/header.component';
import {RecipeInfoComponent} from './recipe-info/recipe-info.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../shared/material.modul.module';
import {RouterModule, Routes} from '@angular/router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes-resolver.service';
const route: Routes = [
  {
    path: '',
    component: RecipeInfoComponent
  },
  {
    path: 'new',
    component: RecipeEditComponent
  },
  {
    path: ':id',
    component: RecipeDetailComponent,
    resolve: [RecipesResolverService]
  },
  {
    path: ':id/edit',
    component: RecipeEditComponent,
    resolve: [RecipesResolverService]
  }
]
@NgModule({
    declarations: [
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent,
      RecipesComponent,
      RecipedProjectComponent,
      HeaderComponent,
      RecipeInfoComponent,
      RecipeEditComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(route)
  ],
  exports: [
      HeaderComponent,
      RecipeInfoComponent
    ]
  }
)
export class RecipeModule {

}
