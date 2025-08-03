import { Component } from '@angular/core';

interface MenuItem {
  label: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    { label: 'Basicos', route: '/reactive/basic' },
    { label: 'Dinamicos', route: '/reactive/dynamic' },
    { label: 'Switches', route: '/reactive/switches' },
  ];

  public authMenu: MenuItem[] = [{ label: 'Registro', route: '/auth' }];
}
