import { Component, inject } from '@angular/core';
import { ShopService } from '../services/shop.service';
import { Product } from '../interfaces/product.interface';

const ROW_HEIGHTS: { [id: number]: number } = {
  1: 430,
  3: 355,
  4: 380,
};

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  private shopService = inject(ShopService);

  colsPerRow: number = 3;

  heightOfRow: number = ROW_HEIGHTS[this.colsPerRow];
  defaultCategory: string | undefined;

  onColumnChange(columns: number): void {
    this.colsPerRow = columns;
    this.heightOfRow = ROW_HEIGHTS[this.colsPerRow];
  }

  onCategorySelection(category: string): void {
    this.defaultCategory = category;
  }

  onCartClick(product: Product): void {
    this.shopService.addToShoppingCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    });
  }
}
