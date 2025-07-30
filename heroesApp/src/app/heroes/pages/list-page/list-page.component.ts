import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/hero.interface';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnDestroy, OnInit {
  public subs: SubSink = new SubSink();
  public heroes?: Hero[];
  constructor(private heroService: HeroesService) {}
  ngOnInit(): void {
    this.subs.add(
      this.heroService.getHeroes().subscribe((heroes) => {
        this.heroes = heroes;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
