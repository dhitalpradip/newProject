import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
        'Chicken Curry',
        'Spicy',
        'https://upload.wikimedia.org/wikipedia/commons/6/6f/Chicken_Curry_North_Indian_Style.jpg',
        [
            new Ingredient('Chicken',3),
            new Ingredient('Masala', 1)
        ]),
        new Recipe(
         'Butter Chicken',
         'Sweet and Spicy',
         'https://upload.wikimedia.org/wikipedia/commons/e/e5/Butter_Chicken_0000x0000_0.jpg',
        [
            new Ingredient('Chicken',2),
            new Ingredient('Butter', 1)
        ]),
        new Recipe('Alu Tama',
        'Sour and Spicy',
        'http://3.bp.blogspot.com/-bZbtmntZOE0/VcKDH3FePtI/AAAAAAAAA-4/VUfEIGLl6aw/s1600/IMG_4061_E1.JPG',
        [
            new Ingredient('Potato',2),
            new Ingredient('Bamboo Shoots', 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
       return this.recipes.slice();
    }

getRecipe(index: number){
  return this.recipes[index];
}

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}
