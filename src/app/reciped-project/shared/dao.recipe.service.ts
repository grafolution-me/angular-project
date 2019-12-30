import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';


@Injectable()
export class DaoRecipeService {
  constructor(private  http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {

  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put('https://angular-project-df0a1.firebaseio.com/recipes.json', recipes, {
        responseType: `json`,
      });
  }

  getRecipes() {

      return this.http
        .get<Recipe[]>('https://angular-project-df0a1.firebaseio.com/recipes.json')
        .pipe(map(data => {
        return data.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }), tap(recipes => {
        this.recipeService.setRecipes(recipes);
      }));
  }
}
