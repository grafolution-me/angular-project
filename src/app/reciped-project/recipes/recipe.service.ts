import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {IngredientModel} from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  /*private recipes: Recipe[] = [
    new Recipe('Lasagne Bolognese', 'Receipt for Lasagne Bolognese',
      'https://www.publicdomainpictures.net/pictures/110000/nahled/lasagne-made-in-italy.jpg',
      [
        new IngredientModel('Meat', 1),
        new IngredientModel('Beans', 20)
      ])
  ];
*/
  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipe: Recipe[]) {
    this.recipes = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientstoList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes);
  }

}
