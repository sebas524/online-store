import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent {
  @Output()
  categorySelection = new EventEmitter<string>();

  categories: string[] = [
    'Video Games',
    'Sports',
    'Books',
    'Underwear',
    'Shoes',
    'Toys',
  ];

  onCategorySelection(category: string): void {
    this.categorySelection.emit(category);
  }
}
