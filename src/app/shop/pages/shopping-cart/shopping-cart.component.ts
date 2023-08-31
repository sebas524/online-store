import { Component, OnInit, inject } from '@angular/core';
import { ShoppingCart } from '../../interfaces/shopping-cart.interface';
import { Product } from '../../interfaces/product.interface';
import { Item } from '../../interfaces/item.interface';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [],
})
export class ShoppingCartComponent implements OnInit {
  private shopService = inject(ShopService);
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
    this.shopService.shoppingCart.subscribe((_shoppingCart: ShoppingCart) => {
      this.shoppingCart = _shoppingCart;
      this.dataSource = this.shoppingCart.items;
      console.log('ds => ', this.dataSource);
    });
  }

  totalCalculator(products: Array<Item>): number {
    return this.shopService.totalCalculator(products);
  }
  emptyShoppingCart(): void {
    this.shopService.emptyShoppingCart();
  }

  removeItem(item: Item): void {
    this.shopService.removeItem(item);
  }

  addQuantity(item: Item): void {
    // * this method has been already created in service. remeber it actually checks to see if item already exists and if so then just increases the quantity. else, it just adds the new item.
    this.shopService.addToShoppingCart(item);
  }
  subtractQuantity(item: Item): void {
    this.shopService.substractQuantity(item);
  }
}
