import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/Interfaces/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input () recipe?: Recipe
}
