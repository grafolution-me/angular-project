import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import { IngredientModel} from '../shared/Ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()
  private recipes: Recipe[] = [new Recipe('Lasagne Bolognese', 'Receipt for Lasagne Bolognese',
    'https://www.publicdomainpictures.net/pictures/110000/nahled/lasagne-made-in-italy.jpg', [
      new IngredientModel('Meat', 1),
      new IngredientModel('Beans',20)
    ])];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientstoList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
