import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import mapboxgl from 'mapbox-gl';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';

mapboxgl.accessToken =
  'pk.eyJ1IjoiamFqYWphamFhamEiLCJhIjoiY21lMzI4dnloMDJvNzJscTJjdDF1azBiZiJ9.k4yua51RIhPurDL-euNx5Q';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, CounterAloneComponent],
})
export class MapsModule {}
