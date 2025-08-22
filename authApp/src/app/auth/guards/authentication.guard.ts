import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const AuthenticationGuard: CanMatchFn = (route, segments) => {
  const routes = inject(Router);
  const token = localStorage.getItem('token');
  const { path } = route;
  switch (path) {
    case 'auth':
      if (!token) return true;
      routes.navigateByUrl('/dashboard');
      break;

    case 'dashboard':
      if (token) return true;
      routes.navigateByUrl('auth');
      break;
  }

  return true;
};
