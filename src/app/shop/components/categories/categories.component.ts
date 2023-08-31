import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ShopApiService } from '../../services/shop-api.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private shopApiService = inject(ShopApiService);
  @Output()
  categorySelection = new EventEmitter<string>();

  categories: string[] | undefined;
  categoriesSubs: Subscription | undefined;

  ngOnInit(): void {
    this.categoriesSubs = this.shopApiService
      .getAllCategories()
      .subscribe((res) => {
        this.categories = res;
        console.log('cate =>', res);

        console.log('cate2 =>', this.categories);
      });
  }

  ngOnDestroy(): void {
    if (this.categoriesSubs) {
      this.categoriesSubs.unsubscribe();
    }
  }

  onCategorySelection(category: string): void {
    this.categorySelection.emit(category);
  }
}
