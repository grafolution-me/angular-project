import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {MaterialModule} from './shared/material.modul.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {WelcomeComponent} from './core/welcome.component';
import {PageNotFoundComponent} from './core/page-not-found.component';

import {RecipedModule} from './reciped-project/reciped.module.module';
import {DirectivesModule} from './directives-project/directives.module';
import {ShoppingListService} from './reciped-project/shopping-list/shopping-list.service';
import {RecipeEditComponent} from './reciped-project/recipes/recipe-edit/recipe-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipeService} from './reciped-project/recipes/recipe.service';
import {DaoRecipeService} from './reciped-project/shared/dao.recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,

    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    RecipedModule,
    DirectivesModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService, DaoRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
