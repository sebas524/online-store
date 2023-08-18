import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [],
})
export class ProductsComponent {
  colsPerRow: number = 3;
  onColumnChange(columns: number): void {
    this.colsPerRow = columns;
  }
}
