import { Component, Input, inject } from '@angular/core';
import { ShoppingCart } from '../../interfaces/shopping-cart.interface';
import { Item } from '../../interfaces/item.interface';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent {
  private shopService = inject(ShopService);

  private _shoppingCart: ShoppingCart = {
    items: [],
  };

  numberOfItems: number = 0;

  @Input()
  get shoppingCart(): ShoppingCart {
    return this._shoppingCart;
  }

  set shoppingCart(shoppingCart: ShoppingCart) {
    this._shoppingCart = shoppingCart;
    this.numberOfItems = shoppingCart.items
      .map((item) => {
        return item.quantity;
      })
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
  }

  totalCalculator(products: Array<Item>): number {
    return this.shopService.totalCalculator(products);
  }

  emptyShoppingCart(): void {
    this.shopService.emptyShoppingCart();
  }
}
