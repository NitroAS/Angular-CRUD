import { UsersListModule } from './pages/users/users-list/users-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/life-cycle/header/header.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/life-cycle/button/button.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { PagesNotFoundComponent } from './components/life-cycle/pages-not-found/pages-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LifeCycleComponent,
    HeaderComponent,
    PagesNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UsersListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
