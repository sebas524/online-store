import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
})
export class ProductBoxComponent {
  @Input() maxProductView = false;
  @Output() addToShoppingCart = new EventEmitter();
  // product: Product | undefined = {
  //   image: 'https://via.placeholder.com/130',
  //   id: 33433431,
  //   name: 'Desk',
  //   desc: 'xxx',
  //   price: 150,
  //   quantity: 1,
  // };
  @Input() product: Product | undefined;

  onCartClick(): void {
    this.addToShoppingCart.emit(this.product);
  }
}
