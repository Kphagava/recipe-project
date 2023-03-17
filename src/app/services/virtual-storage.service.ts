import { Injectable } from '@angular/core';
import { Recipe } from '../Interfaces/recipe';
import { RecipeDifficulty } from '../enums/difficulty';

@Injectable({
  providedIn: 'root'
})
export class VirtualStorageService {

  constructor() { }
  public items: Recipe[]=[{
    id: 1,
    author: 'Keti Phagava',
    title: 'Best lasagna of your lifetime',
    description: 'in only 40 minutes cook beautifyl lasagna',
    date: '17/03/2023',
    time: 40,
    ingridients: ['Pasta', 'Bolognese', 'Beshamel', 'Cheese'],
    difficulty: RecipeDifficulty.Hard
  },
  {
    id: 2,
    author: 'Nana Ninoshvili',
    title: 'Mushroom soup',
    description: 'creamy mushroom soup at home',
    date: '17/03/2023',
    time: 15,
    ingridients: ['Mushrooms', 'Cream', 'Cheese', 'Pepper'],
    difficulty: RecipeDifficulty.Medium
  },
  {
    id: 3,
    author: 'Giorgi Giorgadze',
    title: 'Scrumbled eggs',
    description: 'Easiest eggs you\'ll ever eat',
    date: '17/03/2023',
    time: 2,
    ingridients: ['eggs', 'creame', 'cheese'],
    difficulty: RecipeDifficulty.Easy
  },
];

  add(item: Recipe) {
      this.items.push(item);
  }

  remove(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
  }

  update(id: number, updates: Partial<Recipe>) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index !== -1) {
          this.items[index] = { ...this.items[index], ...updates };
      }
  }

  find(query: any) {
      return this.items.filter((item: any) => {
          for (const key in query) {
              if (item[key] !== query[key]) {
                  return false;
              }
          }
          return true;
      });
  }

  findOne(query: any) {
      return this.items.find((item: any) => {
          for (const key in query) {
              if (item[key] !== query[key]) {
                  return false;
              }
          }
          return true;
      });
  }

  count() {
      return this.items.length;
  }

}