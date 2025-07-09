import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRountingModule } from './countries-rounting.module';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';



@NgModule({
  declarations: [ByCapitalPageComponent],
  imports: [
    CommonModule, CountriesRountingModule, SharedModule
  ]
})
export class CountriesModule { }
