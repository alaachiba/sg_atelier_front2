import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierListComponent } from './components/atelier-list/atelier-list.component'
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { FormateurDashboardComponent } from './pages/formateur-dashboard/formateur-dashboard.component';
import { ParticipantDashboardComponent } from './pages/participant-dashboard/participant-dashboard.component';

const routes: Routes = [
  { path: '', component: AtelierListComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'formateur', component: FormateurDashboardComponent },
  { path: 'participant', component: ParticipantDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
