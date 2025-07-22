import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, AngularMaterialModule],
  exports: [MenuComponent],
})
export class SharedModule {}
