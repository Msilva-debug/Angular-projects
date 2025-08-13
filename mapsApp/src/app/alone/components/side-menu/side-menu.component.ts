import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface IMenuItem {
  route: string;
  name: string;
}
@Component({
  selector: 'side-menu',
  standalone: true,
  imports:[RouterModule, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public listItemsSideMenu: IMenuItem[] = [
    { route: '/maps/fullscreen', name: 'FullScreen' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Properties' },
    { route: '/maps/zoomrange', name: 'ZoomRange' },
    { route: '/alone', name: 'Alone' },
  ];
}
