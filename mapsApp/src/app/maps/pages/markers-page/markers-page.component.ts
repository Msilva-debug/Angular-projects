import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  public currentLngLat: LngLat = new LngLat(-76.5, 3.43);
  public map?: Map;
  public markers: MarkerAndColor[] = [];
  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no existe):';
    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13,
    });

    this.loadToLocalStorage();
  }

  createMarker = () => {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    this.addMarker(this.map!.getCenter(), color);
  };

  addMarker = (lngLat: LngLat, color: string) => {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({ color, marker });
    this.saveToLocalStorage();

    // dragend
    this.map.on('dragend', (ev) => {
      this.saveToLocalStorage();
    });
  };

  redirectMarker = (marker: Marker) => {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  };

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }
  saveToLocalStorage = () => {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ color, marker }) => {
        return {
          color,
          lngLat: marker.getLngLat().toArray(),
        };
      }
    );
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  };
  loadToLocalStorage = () => {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);

      this.addMarker(coords, color);
    });
  };
}
