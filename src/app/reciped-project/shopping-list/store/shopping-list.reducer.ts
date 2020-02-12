import { IngredientModel } from '../../shared/Ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';


const initialState = {
   ingredients: [new IngredientModel('Eggs', 3)]
}
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
       switch ( action.type ) {
            case ShoppingListActions.ADD_INGREDIENT:
                return {
                    ...state,
                    ingredients: [...state.ingredients, action.payload]
                }
            
            case ShoppingListActions.ADD_INGREDIENTS:
                return {
                    ... state, 
                    ingredients: [...state.ingredients, ...action.payload]
                }
            case ShoppingListActions.UPDATE_INGREDIENT:
                const ingredient = state.ingredients[action.payload.index];
                const updatedIngredient = {
                    ...ingredient,
                    ...action.payload.ingredient
                }
                const updatedIngredients = [...state.ingredients];
                updatedIngredients[action.payload.index] = updatedIngredient;
                return {
                    ...state,
                    ingredients: []
                }
            case ShoppingListActions.DELETE_INGREDIENT:
                return {

                }
            default:
                return state;
       }

}