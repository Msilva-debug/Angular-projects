import { Component, OnDestroy } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  public name: string = 'Mateo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  public changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  public deleteClient() {
    this.clients.shift();
  }

  public clients: string[] = [
    'Manuel',
    'Jorge',
    'Sebastian',
    'Kevin',
    'Brayan',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  public person = {
    name: 'Mateo',
    gender: 'male',
    age: '21',
  };

  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log(value))
  );
}
