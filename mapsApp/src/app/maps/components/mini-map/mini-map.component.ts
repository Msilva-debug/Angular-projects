import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  public map?: Map;
  @Input() public currentLngLat?: [number, number];
  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no existe):';
    if (!this.currentLngLat) throw "LngLat can't be null";
    const map = (this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13,
      interactive:false
    }));

    new Marker().setLngLat(this.currentLngLat).addTo(map);
  }
}
