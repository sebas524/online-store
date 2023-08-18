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

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    NavbarComponent,
    ShopLayoutComponent,
    HorizontalUpperMiddleBarComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, MaterialModule, SharedModule],
})
export class ShopModule {}
