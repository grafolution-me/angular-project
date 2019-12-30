import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DaoRecipeService} from '../../shared/dao.recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private $recipeService;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private dao: DaoRecipeService) { }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.$recipeService = this.recipeService.recipesChanged.subscribe(( recipes: Recipe[]) => {
      this.recipes = recipes;
      console.log(recipes);
    });
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(): void {
    this.$recipeService.unsubscribe();
  }
}
