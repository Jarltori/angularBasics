import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipies: Recipe[] = [
  new Recipe('Döner macht schöner','Lecker Döner','https://www.tuerkische-rezepte.net/wp-content/uploads/2021/05/doener.jpg'),
  new Recipe('Dürüm aber auch','Lecker Dürüm','https://www.marions-kochbuch.de/dru-pic/3988.jpg')
];


}
