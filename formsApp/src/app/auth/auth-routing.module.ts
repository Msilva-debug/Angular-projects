import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  { path: 'register', component: RegisterPageComponent },
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: '**', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
