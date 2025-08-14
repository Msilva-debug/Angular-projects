import { Component, signal } from '@angular/core';
interface IMenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  public menuItems = signal<IMenuItem[]>([
    { title: 'Counter', router: 'counter' },
    { title: 'Actualizaciones', router: 'properties' },
    { title: 'Usuario', router: 'user-info' },
  ]);

  // public menuItems: IMenuItem[] = [
  //   { title: 'Counter', router: 'counter' },
  //   { title: 'Actualizaciones', router: 'properties' },
  //   { title: 'Usuario', router: 'user-info' },
  // ];
}
