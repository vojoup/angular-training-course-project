import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test recipe description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--488691_11.jpg?itok=ExaTspz1', [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]),
    new Recipe('Test recipe 2', 'Test recipe 2 description', 'http://del.h-cdn.co/assets/17/08/980x490/landscape-1487799585-delish-white-trash-hash-11.jpg', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
  ];

  constructor(private slService: ShoppingListService) {
  }

  /**
   * Get all recipes
   *
   * @return all available recipes
   * */
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  /**
   * Get a single recipe by ID
   *
   * @param id
   * @return recipe of specified ID
   * */
  getRecipeByID(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
