import {NgModule} from '@angular/core';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes.component';
import {RecipeInfoComponent} from './recipe-info/recipe-info.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipesRoutingModule} from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeInfoComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RecipesRoutingModule
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipeInfoComponent,
    RecipeEditComponent,
  ]
})
export class RecipesModule {

}
