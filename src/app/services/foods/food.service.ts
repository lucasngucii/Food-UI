import {Injectable} from '@angular/core';
import {Food} from "../../shared/models/foods/Food";
import {sample_foods, sample_tags} from 'src/data';
import {Tag} from "../../shared/models/tags/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {
  }

  getAll(): Food[] {
    return sample_foods;
  }
  getAllTags(): Tag[]{
    return sample_tags;
  }

  getAllFoodByName(searchItem: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchItem.toLowerCase()));
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === "All" ? this.getAll() : this.getAll().filter(food => food.tags.includes(tag));
  }


}
