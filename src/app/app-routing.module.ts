import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFound404Component } from './shared/pages/page-not-found404/page-not-found404.component';

const routes: Routes = [
  {
    path: 'shop',

    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },

  {
    path: '404',
    component: PageNotFound404Component,
  },
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
