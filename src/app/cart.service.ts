import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable()
export class CartService {
  items: Product[] = []; // propriedade para armazenar os produtos atuais no carrinho
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  // esvazia carrinho
  clearCart() {
    this.items = [];
    return this.items;
  }
}
