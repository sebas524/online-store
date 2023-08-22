import { Component, OnInit, inject } from '@angular/core';
import { ShoppingCart } from '../../interfaces/shopping-cart.interface';
import { ShopService } from '../../services/shop.service';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styles: [],
})
export class ShopLayoutComponent implements OnInit {
  shopService = inject(ShopService);
  shoppingCart: ShoppingCart = { items: [] };

  ngOnInit(): void {
    this.shopService.shoppingCart.subscribe((_shoppingCart) => {
      this.shoppingCart = _shoppingCart;
    });
  }
}
