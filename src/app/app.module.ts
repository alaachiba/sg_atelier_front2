import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtelierListComponent } from './components/atelier-list/atelier-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FormateurDashboardComponent } from './pages/formateur-dashboard/formateur-dashboard.component';
import { ParticipantDashboardComponent } from './pages/participant-dashboard/participant-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AtelierListComponent,
    NavbarComponent,
    AdminDashboardComponent,
    FormateurDashboardComponent,
    ParticipantDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
