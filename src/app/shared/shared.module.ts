import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFound404Component } from './pages/page-not-found404/page-not-found404.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFound404Component],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [],
})
export class SharedModule {}
