import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/Ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  public ingredientsChanged = new Subject<IngredientModel[]>();
  public startedEditing = new Subject<number>();
  private ingredients: IngredientModel[] = [new IngredientModel('Eggs', 3)];

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ing: IngredientModel) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());

  }

  addIngredients(ing: IngredientModel[]) {
    this.ingredients.push(...ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteItem(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
