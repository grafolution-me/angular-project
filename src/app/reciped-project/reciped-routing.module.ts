import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import {AuthGuard} from './auth/auth.guard';
import {RecipeInfoComponent} from './recipes/recipe-info/recipe-info.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {AuthComponent} from './auth/auth.component';
import {RecipedProjectComponent} from './reciped-project.component';
import {WelcomeRecipeComponent} from './components/welcome-recipe/welcome-recipe.component';


const routes: Routes = [
  {
    path: 'reciped', component: RecipedProjectComponent,
    children: [
      {
        path: 'shoppingList',
        component: ShoppingListComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        canActivate: [AuthGuard],
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
            component: RecipeDetailComponent,
            resolve: [RecipesResolverService]
          },
          {
            path: ':id/edit',
            component: RecipeEditComponent,
            resolve: [RecipesResolverService]
          }
        ]
      },
      /* {
         path: '',
         component: WelcomeRecipeComponent
       },*/
      {
        path: '',
        component: WelcomeRecipeComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipedRoutingModule {
}
