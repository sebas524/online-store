import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Category, Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopApiService {
  private http = inject(HttpClient);
  baseUrl: string = environment.baseUrl;

  getAllProducts(
    limit = '15',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${this.baseUrl}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>(
      `${this.baseUrl}/products/categories`
    );
  }
}
