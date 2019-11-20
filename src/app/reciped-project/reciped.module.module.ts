import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipedProjectComponent} from './reciped-project.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit.component';
import {MatCardModule} from '@angular/material/card';


import {DropdownDirectiveDirective} from './shared/dropdown-directive.directive';
import {RouterModule} from '@angular/router';
import { RecipeInfoComponent } from './recipes/recipe-info/recipe-info.component';

@NgModule({

  imports: [CommonModule, MatCardModule, RouterModule],
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipedProjectComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,


    DropdownDirectiveDirective,


    RecipeInfoComponent
  ],
  exports: [
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipesComponent,
    RecipedProjectComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    CommonModule,
    DropdownDirectiveDirective
  ],
  providers: []
})
export class RecipedModule { }
