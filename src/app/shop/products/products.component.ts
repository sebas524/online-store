import { Component } from '@angular/core';

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
}
