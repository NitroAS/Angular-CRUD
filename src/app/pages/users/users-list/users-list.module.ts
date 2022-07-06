import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListRoutingModule } from './users-list-routing.module';


@NgModule({
  declarations: [ UsersListComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
