import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '@services/users.service';
import { User } from '../../../interfaces/req-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user.component.html',
  styles: ``,
})
export class UserComponent {
  public service = inject(UsersService);
  #user = signal<User | null>(null);
  public user = computed(() => this.#user());
  constructor(private route: ActivatedRoute) {
    const userId = this.route.snapshot.paramMap.get('id');
    if (!userId) return;
    this.service.getUserById(userId).subscribe((user) => {
      this.#user.set(user);
    });
  }
}
