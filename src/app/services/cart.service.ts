import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: any = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product: any) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getItemsQty() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    let prices = this.http.get('/assets/shipping.json');
    console.log(prices)
    return prices;
  }
}


