import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ShoppingListService} from './shopping-list.service';
import {IngredientModel} from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient() {

    const amount = this.amountInput.nativeElement.value;
    const name = this.nameInput.nativeElement.value;
    this.shoppingListService.addIngredient(new IngredientModel(name, amount));
  }
}
