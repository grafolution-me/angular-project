import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipedProjectComponent} from '../reciped-project.component';
import {ShoppingListComponent} from '../shopping-list/shopping-list.component';
import {RecipesComponent} from './recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeInfoComponent} from './recipe-info/recipe-info.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipesResolverService} from './recipes-resolver.service';
import {PageNotFoundComponent} from '../../core/page-not-found.component';



const routes: Routes = [
  {
    path: 'reciped', component: RecipedProjectComponent,
    children: [
      {
        path: 'shoppingList',
        component: ShoppingListComponent
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
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
