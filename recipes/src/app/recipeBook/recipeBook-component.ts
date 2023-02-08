import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: "app-recipeBook",
    templateUrl: "./recipeBook-component.html"
})


export class recipeBookComponent{
selectedRecipe: Recipe;
}