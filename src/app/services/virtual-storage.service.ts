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
    time: '40 minutes',
    ingridients: ['Pasta', 'Bolognese', 'Beshamel', 'Cheese'],
    difficulty: RecipeDifficulty.Hard
  }
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