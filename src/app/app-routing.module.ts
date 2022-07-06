import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { PagesNotFoundComponent } from './components/life-cycle/pages-not-found/pages-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Quando carregar vazio ele vai para o Usuario e quando estiver no Usuario ele vai para o Router dele
    path: '',
    pathMatch: 'full',
    component: UsersListComponent,
    // redirectTo: 'Usuario',
    // Certo é redirectTo: 'Usuario'

  },


  {
    path: 'Usuario',
    loadChildren: () => import('./pages/users/users-list/users-list.module').then((m) => m.UsersListModule),

  },


  {
    path: 'form',
    loadChildren: () => import('./pages/users/user-form/user-form.module').then((m) => m.UserFormModule),
  },

  {
    path: '**', component: PagesNotFoundComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
