import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { Product } from '../interfaces/product.interface';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [],
})
export class ShoppingCartComponent implements OnInit {
  dataSource: Array<Item> = [];
  shoppingCart: ShoppingCart = {
    items: [
      {
        image: 'https://via.placeholder.com/130',
        id: 22233431,
        name: 'Nintendo DS',
        price: 350,
        quantity: 1,
      },
      {
        image: 'https://via.placeholder.com/130',
        id: 13533431,
        name: 'LED TV',
        price: 950,
        quantity: 1,
      },
      {
        image: 'https://via.placeholder.com/130',
        id: 13933931,
        name: 'Oreos',
        price: 2,
        quantity: 4,
      },
    ],
  };
  columnsOnDisplay: Array<string> = [
    'image',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.dataSource = this.shoppingCart.items;
    console.log('ds => ', this.dataSource);
  }

  totalCalculator(products: Array<Item>): number {
    return products
      .map((product) => {
        return product.price * product.quantity;
      })
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
  }
}
