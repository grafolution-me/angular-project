import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {IngredientModel} from '../../shared/Ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: true}) form: NgForm;
  $subscriptionStartedEditing: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: IngredientModel;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
    this.$subscriptionStartedEditing = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingListService.getIngredient(index);
          this.form.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        });

  }


  onAddItem(form: NgForm) {
    const value = form.value;
    const amount = value.amount;
    const name = value.name;
    const newIngredient = new IngredientModel(name, amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
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
  }
  deleteItem() {
    this.shoppingListService.deleteItem(this.editedItemIndex);
    this.clearForm();
  }
  ngOnDestroy(): void {
    this.$subscriptionStartedEditing.unsubscribe();
  }
}
