import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopLayoutComponent } from './layout/shop-layout/shop-layout.component';
import { HorizontalUpperMiddleBarComponent } from './components/horizontal-upper-middle-bar/horizontal-upper-middle-bar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    NavbarComponent,
    ShopLayoutComponent,
    HorizontalUpperMiddleBarComponent,
    CategoriesComponent,
    ProductBoxComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
  ],
})
export class ShopModule {}
