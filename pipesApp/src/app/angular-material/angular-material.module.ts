import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [],
  imports: [MatAccordion],
  exports: [
    MatAccordion,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
  ],
})
export class AngularMaterialModule {}
