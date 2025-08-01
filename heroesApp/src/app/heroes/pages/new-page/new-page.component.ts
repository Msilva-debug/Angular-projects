import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  constructor(
    private heroService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);

        this.heroForm.reset(hero);
        return;
      });
  }

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher | null>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<string>(''),
    characters: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackbar(`Heroe ${hero.superhero} actualizado`);
      });
      return;
    }

    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackbar(`Heroe ${hero.superhero} creado`);
      this.router.navigate(['/heroes/edit', hero.id]);
    });
  }

  onDeleteHero(): void {
    if (!this.currentHero.id) {
      this.showSnackbar('No se puede borrar un héroe sin ID');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroService.deleteHeroById(this.currentHero.id))
      )
      .subscribe((resultDeleteHero: boolean) => {
        if (!resultDeleteHero) {
          this.showSnackbar('Error al eliminar el héroe');
          return;
        }
        this.showSnackbar('Héroe eliminado');
        this.router.navigate(['/heroes/list']);
      });
  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
