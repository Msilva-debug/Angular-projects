import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipe/toggle-case.pipe';
import { CanFlyPipe } from './pipe/can-fly.pipe';
import { SortByPipe } from './pipe/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [ProductsRoutingModule, AngularMaterialModule, CommonModule],
})
export class ProductsModule {}
