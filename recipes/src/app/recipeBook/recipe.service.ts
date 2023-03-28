import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();

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

      getRecipe(id: number){
        return this.recipies[id];
      }

      addIngToSL(ingredients: Ingredient[]){
        this.slsService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipies.push(recipe);
        this.recipesChanged.next(this.recipies.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipies[index] = newRecipe;
        this.recipesChanged.next(this.recipies.slice());
      }

}