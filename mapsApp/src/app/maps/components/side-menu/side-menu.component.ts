import { Component } from '@angular/core';

interface IMenuItem {
  route: string;
  name: string;
}
@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public listItemsSideMenu: IMenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Properties' },
    { route: '/maps/zoomrange', name: 'ZoomRange' },
  ];
}
