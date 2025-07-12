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
import { GestionAteliersComponent } from './components/gestion-ateliers/gestion-ateliers.component';
import { GestionUtilisateursComponent } from './components/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionAtelierComponent } from './components/admin/gestion-atelier/gestion-atelier.component';
import { AjouterAtelierComponent } from './components/admin/ajouter-atelier/ajouter-atelier.component';
import { ListeAteliersComponent } from './components/admin/liste-ateliers/liste-ateliers.component';
import { ModifierAtelierComponent } from './components/admin/modifier-atelier/modifier-atelier.component';
import { ModifierUtilisateurComponent } from './components/admin/modifier-utilisateur/modifier-utilisateur.component';
import { AjouterUtilisateurComponent } from './components/admin/ajouter-utilisateur/ajouter-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    AtelierListComponent,
    NavbarComponent,
    AdminDashboardComponent,
    FormateurDashboardComponent,
    ParticipantDashboardComponent,
    GestionAteliersComponent,
    GestionUtilisateursComponent,
    GestionAtelierComponent,
    AjouterAtelierComponent,
    ListeAteliersComponent,
    ModifierAtelierComponent,
    ModifierUtilisateurComponent,
    AjouterUtilisateurComponent
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
