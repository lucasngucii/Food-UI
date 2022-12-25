import { CartItem } from '../cartItems/CartItem';

export class Cart {
  items: CartItem[] = [];
  total: number = 0;
  totalCount: number = 0;
}
