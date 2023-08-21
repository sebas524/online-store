import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCart } from '../interfaces/shopping-cart.interface';
import { Item } from '../interfaces/item.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private snackBar = inject(MatSnackBar);
  shoppingCart = new BehaviorSubject<ShoppingCart>({
    items: [],
  });

  addToShoppingCart(newItem: Item): void {
    const items = [...this.shoppingCart.value.items];

    const itemFound = items.find((itemToBeFound) => {
      return itemToBeFound.id === newItem.id;
      // * so if found, then true, if not, then undefined
    });

    if (!itemFound) {
      items.push(newItem);
    } else {
      itemFound.quantity++;
    }

    // * now we emmit the value so that every component subscribed to the shopping cart catches the value:
    this.shoppingCart.next({ items: items });
    this.snackBar.open(`1 item has been added to shopping cart.`, 'Alright', {
      duration: 3000,
    });
    console.log(this.shoppingCart.value);
  }
}
