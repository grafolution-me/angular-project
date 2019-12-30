import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {DaoRecipeService} from '../shared/dao.recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {
  recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }

}
