import {Component} from "@angular/core";
import {IngredientModel} from '../shared/Ingredient.model';


export class Recipe {
  private _name: string;
  private _description: string;
  private _imagePath: string;
  private _ingredients: IngredientModel[];


  constructor(name: string, description: string, imagePath: string, ingredients: IngredientModel[]) {
    this._name = name;
    this._description = description;
    this._imagePath = imagePath;
    this._ingredients = ingredients;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get imagePath(): string {
    return this._imagePath;
  }

  set imagePath(value: string) {
    this._imagePath = value;
  }

  get ingredients(): IngredientModel[] {
    return this._ingredients;
  }

  set ingredients(value: IngredientModel[]) {
    this._ingredients = value;
  }
}
