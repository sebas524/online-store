import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '',
    // component: HeroesLayoutPageComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        component: ShoppingCartComponent,
      },

      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
