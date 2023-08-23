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
    this.snackBar.open(`1 item has been added to shopping cart.`, 'Got it!', {
      duration: 3000,
    });
    console.log(this.shoppingCart.value);
  }

  removeItem(item: Item): void {
    const refreshedSetOfItems = this.shoppingCart.value.items.filter(
      (_item) => {
        return _item.id !== item.id;
        // * rememeber filter always returns everything except what you want to remove
      }
    );

    this.shoppingCart.next({ items: refreshedSetOfItems });

    this.snackBar.open('1 item has been removed!', 'Got it!', {
      duration: 3000,
    });
  }

  substractQuantity(item: Item): void {
    const refreshedSetOfItems = this.shoppingCart.value.items.map(
      (_item: Item) => {
        if (_item.id === item.id) {
          const newQuantity = Math.max(0, _item.quantity - 1); // * Ensure quantity doesn't go below zero
          return { ..._item, quantity: newQuantity };
          `We return a new object that represents the modified item. We use the spread ({ ..._item }) operator to copy all properties of the current item and update the quantity property with the newQuantity value.`;
        }
        return _item;
        // * If the current item is not the one we're modifying, we return it as-is.
      }
    );

    this.shoppingCart.next({ items: refreshedSetOfItems });

    `This checks if the quantity of the ORIGINAL item is still greater than 1 after subtraction:`;
    if (item.quantity > 1) {
      this.snackBar.open('1 item has been removed!', 'Got it!', {
        duration: 3000,
      });
    } else {
      this.removeItem(item);
    }
  }

  emptyShoppingCart(): void {
    this.shoppingCart.next({ items: [] });
    this.snackBar.open('Shopping Cart has been emptied!', 'Got it!', {
      duration: 3000,
    });
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
