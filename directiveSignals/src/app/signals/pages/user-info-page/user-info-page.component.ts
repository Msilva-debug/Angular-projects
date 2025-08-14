import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css',
})
export class UserInfoPageComponent implements OnInit {
  public userService = inject(UsersServiceService);
  public idUser = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.idUser());
  }

  loadUser = (id: number) => {
    if (id <= 0) return;

    this.idUser.set(id);

    this.userService.getUserById(this.idUser()).subscribe({
      next: (user) => {
        this.currentUser.set(user);
        this.userWasFound.set(true);
      },
      error: () => {
        this.userWasFound.set(false);
        this.currentUser.set(undefined);
      },
    });
  };
}
