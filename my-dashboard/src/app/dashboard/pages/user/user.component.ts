import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@services/users.service';
import { User } from '../../../interfaces/req-response';
import { JsonPipe } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe, TitleComponent],
  template: `<shared-title title-pro="User Details" />
    @if(user()) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />
      <div>
        <h3>{{ this.fullName() }}</h3>
        <p>{{ user()!.email }}</p>
      </div>
    </section>
    }@else {
    <p>Cargando informacion</p>
    }`,
  styles: ``,
})
export class UserComponent {
  private service = inject(UsersService);
  private route = inject(ActivatedRoute);
  #user = signal<User | null>(null);
  public user = toSignal(
    this.route.params.pipe(switchMap(({ id }) => this.service.getUserById(id)))
  );
  public fullName = computed(
    () => `${this.user()!.first_name} ${this.user()!.last_name}`
  );
}
