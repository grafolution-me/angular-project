import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RecipedProjectComponent} from './reciped-project/reciped-project.component';
import {WelcomeComponent} from './core/welcome.component';
import {PageNotFoundComponent} from './core/page-not-found.component';
import {DirectivesComponent} from './directives-project/directives.component';
import {ShoppingListComponent} from './reciped-project/shopping-list/shopping-list.component';
import {RecipesComponent} from './reciped-project/recipes/recipes.component';
import {RecipeInfoComponent} from './reciped-project/recipes/recipe-info/recipe-info.component';
import {RecipeDetailComponent} from './reciped-project/recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './reciped-project/recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'directive', component:  DirectivesComponent},
  { path: 'reciped', component:  RecipedProjectComponent,
    children: [
      {
        path: 'shoppingList',
        component: ShoppingListComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        children: [
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
            component: RecipeDetailComponent
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent
          }
        ]
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
