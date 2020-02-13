import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/Ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) form: NgForm;
  $subscriptionStartedEditing: Subscription;
  editMode = false;
  editedItem: IngredientModel;

  constructor( private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.$subscriptionStartedEditing =  this.store.select('shoppingList').subscribe((state)=>{
      if(state.editedIngredientIndex > -1) {
        this.editMode = true;
        this.editedItem = state.editedIngredient;
        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      } else { 
        this.editMode = false;
      }
    });
    // this.$subscriptionStartedEditing = this.shoppingListService.startedEditing
    //   .subscribe(
    //     (index: number) => {
    //       // this.editedItemIndex = index;
    //       // this.editMode = true;
    //       // this.editedItem = this.shoppingListService.getIngredient(index);
    //       // this.form.setValue({
    //       //   name: this.editedItem.name,
    //       //   amount: this.editedItem.amount
    //       // });
    //     });

  }


  onAddItem(form: NgForm) {
    const value = form.value;
    const amount = value.amount;
    const name = value.name;
    const newIngredient = new IngredientModel(name, amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient(newIngredient));
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.clearForm();
  }

  clearForm() {
    this.form.form.patchValue({
      name: '',
      amount: ''
    });
    this.form.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
  deleteItem() {
  //  this.shoppingListService.deleteItem(this.editedItemIndex);
    this.store.dispatch( new ShoppingListActions.DeleteIngredient())
    this.clearForm();
  }
  ngOnDestroy(): void {
    this.$subscriptionStartedEditing.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
