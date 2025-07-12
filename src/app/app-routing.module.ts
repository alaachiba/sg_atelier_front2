import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierListComponent } from './components/atelier-list/atelier-list.component'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FormateurDashboardComponent } from './pages/formateur-dashboard/formateur-dashboard.component';
import { ParticipantDashboardComponent } from './pages/participant-dashboard/participant-dashboard.component';
import { GestionUtilisateursComponent } from './components/gestion-utilisateurs/gestion-utilisateurs.component';
import { GestionAtelierComponent } from './components/admin/gestion-atelier/gestion-atelier.component';
import { ListeAteliersComponent } from './components/admin/liste-ateliers/liste-ateliers.component';
import { ModifierAtelierComponent } from './components/admin/modifier-atelier/modifier-atelier.component';

const routes: Routes = [
  { path: '', component: AtelierListComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'formateur', component: FormateurDashboardComponent },
  { path: 'participant', component: ParticipantDashboardComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'ateliers/add', component: GestionAtelierComponent },
      { path: 'ateliers/list', component: ListeAteliersComponent },
      { path: 'utilisateurs', component: GestionUtilisateursComponent },
      { path: '', redirectTo: 'ateliers/list', pathMatch: 'full' },
      { path: 'ateliers/edit/:id', component: ModifierAtelierComponent }
    ]
  },
  {
    path: 'admin/gestion-ateliers',
    component: GestionAtelierComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
