import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () =>
          import(
            './dashboard/pages/change-detection/change-detection.component'
          ).then((c) => c.ChangeDetectionComponent),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () =>
          import('./dashboard/pages/control-flow/control-flow.component').then(
            (c) => c.ControlFlowComponent
          ),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () =>
          import(
            './dashboard/pages/defer-options/defer-options.component'
          ).then((c) => c.DeferOptionsComponent),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () =>
          import('./dashboard/pages/defer-views/defer-views.component').then(
            (c) => c.DeferViewsComponent
          ),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () =>
          import('./dashboard/pages/user/user.component').then(
            (c) => c.UserComponent
          ),
      },
      {
        path: 'users',
        title: 'Users',
        loadComponent: () =>
          import('./dashboard/pages/users/users.component').then(
            (c) => c.UsersComponent
          ),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition-1',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition.component1'
          ).then((c) => c.ViewTransitionComponent),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition-2',
        loadComponent: () =>
          import(
            './dashboard/pages/view-transition/view-transition.component2'
          ).then((c) => c.ViewTransitionComponent),
      },
      { path: '**', redirectTo: 'control-flow', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
