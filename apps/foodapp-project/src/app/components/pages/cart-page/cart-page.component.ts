import { CartItem } from 'src/app/shared/models/cartItems/CartItem';
import { CartService } from './../../../services/carts/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/models/carts/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  ngOnInit() {}
  remoteFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: CartItem, quantityString: string) {
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
