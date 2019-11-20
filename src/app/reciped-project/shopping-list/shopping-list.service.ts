import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/Ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IngredientModel[]>();
  private ingredients: IngredientModel[] = [new IngredientModel('Eggs', 3)];

  constructor() { }
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ing: IngredientModel) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
  addIngredients(ing: IngredientModel[]) {
    this.ingredients.push(...ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
