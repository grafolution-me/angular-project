import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DaoRecipeService} from '../shared/dao.recipe.service';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';

// @ts-ignore
@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dao: DaoRecipeService,
              private recipesService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipe = this.recipesService.getRecipes();
    if (recipe.length === 0) {
      return this.dao.getRecipes();
    } else {
      return recipe;
    }

  }

}
