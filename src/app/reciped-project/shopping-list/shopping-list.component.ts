import {Component, OnDestroy, OnInit} from '@angular/core';
import { IngredientModel} from '../shared/Ingredient.model';
import {Subscription, Observable} from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: IngredientModel[]}>;
  private serviceIngredientSub: Subscription;
  constructor(private store: Store<fromApp.AppState>) 
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
   // this.serviceIngredientSub.unsubscribe();
  }
  onEditItem(index: number) {
    // this.serviceIngredient.startedEditing.next(index);
    this.store.dispatch(new shoppingListActions.StartEdit(index));

  }
}
