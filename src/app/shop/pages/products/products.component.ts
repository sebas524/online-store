import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ShopService } from '../../services/shop.service';
import { Product } from '../../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { ShopApiService } from '../../services/shop-api.service';

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
export class ProductsComponent implements OnInit, OnDestroy {
  private shopService = inject(ShopService);
  private shopApiService = inject(ShopApiService);
  colsPerRow: number = 3;
  heightOfRow: number = ROW_HEIGHTS[this.colsPerRow];
  chosenCategory: string | undefined;
  sort: string = 'desc';
  limit: string = '15';
  fetchedProducts: Array<Product> | undefined;
  // * following variable is going to contain our subscription, and once we've destroyed the component we want to remove everything cause we dont want any memory leaks:
  productsSubs: Subscription | undefined;

  ngOnInit(): void {
    this.getAllProducts();
  }
  ngOnDestroy(): void {
    if (this.productsSubs) {
      this.productsSubs.unsubscribe();
      // * if we dont do this then, while going from product page to cart page back and forth for a while, you may end up creating multiple subscriptions that may result in memory leaks
    }
  }

  getAllProducts(): void {
    // * set productsSubs to this down here:
    this.productsSubs = this.shopApiService
      .getAllProducts(this.limit, this.sort, this.chosenCategory)
      .subscribe((res) => {
        this.fetchedProducts = res;
        console.log('fetchedProducts => ', res);
      });
  }

  onColumnChange(columns: number): void {
    this.colsPerRow = columns;
    this.heightOfRow = ROW_HEIGHTS[this.colsPerRow];
  }

  onCategorySelection(category: string): void {
    this.chosenCategory = category;
    this.getAllProducts();
  }

  onCartClick(product: Product): void {
    this.shopService.addToShoppingCart({
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  }

  onChangeLimit(newLimit: number): void {
    this.limit = newLimit.toString();
    this.getAllProducts();
  }
  onChangeSort(newSort: string): void {
    this.sort = newSort;
    this.getAllProducts();
  }
}
