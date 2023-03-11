import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  @Input() recipeTitle: string = "unknown recipe"
  @Input() recipeAuthor: string = "unknown author"
  @Input() recipeDescription: string = "no description"
}
