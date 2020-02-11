import {Component, OnDestroy, OnInit} from '@angular/core';
import { IngredientModel} from '../shared/Ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription, Observable} from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: IngredientModel[]}>;
  private serviceIngredientSub: Subscription;
  constructor(private serviceIngredient: ShoppingListService,
              private store: Store<{shoppingList: { ingredients: IngredientModel[] }}>) 
              { }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.serviceIngredient.getIngredients();
    // this.serviceIngredientSub = this.serviceIngredient.ingredientsChanged
    //   .subscribe(
    //     (ing: IngredientModel[]) => {
    //       this.ingredients = ing;
    //     }
    //   );
  }
  ngOnDestroy(): void {
    this.serviceIngredientSub.unsubscribe();
  }
  onEditItem(index: number) {
    // this.serviceIngredient.startedEditing.next(index);
  }
}
