import { Component } from '@angular/core';

enum RecipeDifficulty {
  Hard = "hard",
  Medium = "medium",
  Easy = "easy",
}

interface Recipe {
  id: number;
  author: string;
  title: string;
  description: string;
  date: string;
  time: number;
  ingridients: string[];
  difficulty: RecipeDifficulty;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  recipe: Recipe = {
    id: 1,
    author: 'Keti Phagava',
    title: 'Best lasagna of your life',
    description: 'Cook beautiful lasagna in under 30 minutes',
    date: '01/03/2023',
    time: 5,
    ingridients: ['პასტა', 'ხორცი', 'პომიდორი', 'ხახვი'],
    difficulty: RecipeDifficulty.Easy,
  }
}
