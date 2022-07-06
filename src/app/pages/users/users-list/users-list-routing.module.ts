import { UserFormComponent } from './../user-form/user-form.component';
import { UsersListComponent } from './users-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // Estando no Router não precisa colocar "path:'Usuario'" já q quando carregou lá pegou as informações
    path: '',
    component: UsersListComponent,
  
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersListRoutingModule { }
