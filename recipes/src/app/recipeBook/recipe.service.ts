import { Recipe } from "./recipe.model";
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();


    private recipies: Recipe[] = [
        new Recipe(
            'Döner macht schöner',
            'Lecker Döner','https://www.tuerkische-rezepte.net/wp-content/uploads/2021/05/doener.jpg',
            [
                new Ingredient('Falafel', 4),
                new Ingredient('Salat',2)
            ]),
        new Recipe(
            'Dürüm aber auch','Lecker Dürüm',
            'https://www.marions-kochbuch.de/dru-pic/3988.jpg',
            [
                new Ingredient('Falafel', 3),
                new Ingredient('Salat',2)
            ])
      ];

      constructor(private slsService: ShoppingListService){

      }

      getRecipes(){
        // slice erzeugt mir nur ein neues Array hiervon (Kopie)
        return this.recipies.slice();
      }

      addIngToSL(ingredients: Ingredient[]){
        this.slsService.addIngredients(ingredients);

      }

}