import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameUpper: string = 'MATEO';
  public nameLower: string = 'mateo';
  public fullName: string = 'MaTeO';
}
