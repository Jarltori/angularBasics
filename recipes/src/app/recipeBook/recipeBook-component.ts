import { Component } from "@angular/core";
import { RecipeService } from "./recipe.service";

@Component({
    selector: "app-recipeBook",
    templateUrl: "./recipeBook-component.html",
    providers: [RecipeService]

})


export class recipeBookComponent{
    constructor(){}

    ngOnInit(){}

}