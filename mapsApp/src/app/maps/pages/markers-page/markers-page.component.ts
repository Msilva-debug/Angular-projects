import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map') divMap?: ElementRef;
  public currentLngLat: LngLat = new LngLat(-76.5, 3.43);
  public map?: Map;
  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no existe):';
    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat,
      zoom: 13,
    });
    // const markerHtml = document.createElement('img');
    // markerHtml.src =
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqUoR6IXB5oAVRqIfgGV1Qf-4a1z8zRmjww&s';
    // markerHtml.style.width = '40px'; // opcional
    // markerHtml.style.height = '40px'; // opcional

    // const marker = new Marker({
    //   // element: markerHtml
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map);
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    this.addMarker(this.map!.getCenter(), color);

    console.log('aksdaskda', this.map);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;
    new Marker({ color, draggable: true }).setLngLat(lngLat).addTo(this.map!);
  }

  get markers() {
    return this.map?._markers;
  }

  redirectMarker(lngLat: LngLat) {
    this.map?.setCenter(lngLat);
  }
}
