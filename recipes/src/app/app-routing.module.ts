import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipeDetailComponent } from "./recipeBook/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipeBook/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipeBook/recipe-start/recipe-start.component";
import { recipeBookComponent } from "./recipeBook/recipeBook-component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";


const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {path: 'recipes', component: recipeBookComponent, children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id', component: RecipeDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}