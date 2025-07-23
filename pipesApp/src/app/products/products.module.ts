import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
  imports: [ProductsRoutingModule, AngularMaterialModule, CommonModule],
})
export class ProductsModule {}
