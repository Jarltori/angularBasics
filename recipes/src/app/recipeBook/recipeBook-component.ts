import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector: "app-recipeBook",
    templateUrl: "./recipeBook-component.html",
    providers: [RecipeService]

})


export class recipeBookComponent{
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService){

    }

    ngOnInit(){
        this.recipeService
            .recipeSelected
            .subscribe (
                (recipe: Recipe) => {
                    this.selectedRecipe = recipe;
                }
            );
    }

}