import { Component, OnInit } from '@angular/core';
import { IngredientModel} from '../shared/Ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[];
  constructor(private serviceIngredient: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.serviceIngredient.getIngredients();
    console.log(this.ingredients);
    this.serviceIngredient
      .ingredientsChanged
      .subscribe(
        (ing: IngredientModel[]) => {
          this.ingredients = ing;
        }
      )
  }

}
