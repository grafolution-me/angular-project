import { IngredientModel } from '../../shared/Ingredient.model';
import { Action } from '@ngrx/store';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
   ingredients: [new IngredientModel('Eggs', 3)]
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient) {
       switch ( action.type ) {
            case ShoppingListActions.ADD_INGREDIENT:
                return {
                    ...state,
                    ingredients: [...state.ingredients, action.payload]
                }
            default:
                return state;
       }

}