import { RecipeDifficulty } from "../enums/difficulty";
export interface Recipe {
    id: number;
    author: string;
    title: string;
    description: string;
    date: string;
    time: number;
    ingridients: string[];
    difficulty: RecipeDifficulty;
  }