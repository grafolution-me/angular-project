import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthComponent} from './auth/auth.component';
import {RecipedProjectComponent} from './reciped-project.component';
import {WelcomeRecipeComponent} from './components/welcome-recipe/welcome-recipe.component';


const routes: Routes = [
  {
    path: 'reciped', 
    component: RecipedProjectComponent,
    children: [
      {
        path: 'shoppingList',
        loadChildren: ( ) => import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)
      },
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'recipes',
        loadChildren: () =>import('./recipes/recipe.module').then(m=>m.RecipeModule)
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
