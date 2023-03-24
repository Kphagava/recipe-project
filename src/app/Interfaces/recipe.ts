import { RecipeDifficulty } from "../enums/difficulty";
export interface Recipe {
    image?: string;
    id: number;
    author?: string;
    title: string;
    description: string;
    date?: string;
    time: string;
    ingridients?: string[];
    difficulty?: RecipeDifficulty;
  }