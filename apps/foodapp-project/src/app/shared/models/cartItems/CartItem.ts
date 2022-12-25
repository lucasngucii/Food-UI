import { Food } from '../foods/Food';

export class CartItem {
  static quantity: number;
  constructor(public food: Food) {}

  quantity: number = 1;
  price: number = this.food.price;
}
