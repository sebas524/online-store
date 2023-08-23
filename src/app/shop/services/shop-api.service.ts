import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ShopApiService {
  private http = inject(HttpClient);
  baseUrl: string = environment.baseUrl;

  getAllProducts(limit = '15', sort = 'desc'): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `${this.baseUrl}/products?sort=${sort}&limit=${limit}`
    );
  }
}
