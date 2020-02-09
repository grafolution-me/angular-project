import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RecipedRoutingModule} from './reciped-routing.module';
import {WelcomeRecipeComponent} from './components/welcome-recipe/welcome-recipe.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {RecipeModule} from './recipes/recipe.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {AuthModule} from './auth/auth.module';

@NgModule({

  imports: [
    CommonModule,
    MatCardModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipedRoutingModule,
    SharedModule,
    ShoppingListModule,
    RecipeModule,
    CoreModule
  ],
  declarations: [
    WelcomeRecipeComponent,

  ]
})
export class RecipedModule { }
