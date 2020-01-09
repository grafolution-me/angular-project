import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipedProjectComponent} from './reciped-project.component';
import {HeaderComponent} from './components/header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {MatCardModule} from '@angular/material/card';


import {DropdownDirectiveDirective} from './shared/dropdown-directive.directive';
import {RouterModule} from '@angular/router';
import {RecipeInfoComponent} from './recipes/recipe-info/recipe-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecipeService} from './recipes/recipe.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth/auth.component';
import {LoadingSpinnerComponent} from './shared/spinner/loading-spinner';
import {AuthIntercepterService} from './auth/auth-intercepter.service';
import {RecipedRoutingModule} from './reciped-routing.module';
import { WelcomeRecipeComponent } from './components/welcome-recipe/welcome-recipe.component';

@NgModule({

  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RecipedRoutingModule
  ],
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


    RecipeInfoComponent,


    AuthComponent,
    LoadingSpinnerComponent,
    WelcomeRecipeComponent,

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
    DropdownDirectiveDirective,

  ],
  providers: [RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}]
})
export class RecipedModule { }
