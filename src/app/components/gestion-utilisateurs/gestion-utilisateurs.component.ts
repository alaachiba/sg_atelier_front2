import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {

  utilisateurs: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.chargerUtilisateurs();
  }

  chargerUtilisateurs() {
    const token = localStorage.getItem('token');
    this.http.get<any[]>('http://localhost:8000/api/utilisateurs', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: data => {
        this.utilisateurs = data;
        this.loading = false;
      },
      error: err => {
        this.error = "Erreur lors du chargement des utilisateurs.";
        console.error(err);
        this.loading = false;
      }
    });
  }

  supprimerUtilisateur(id: number) {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) return;
  
    const token = localStorage.getItem('token');
    this.http.delete(`http://localhost:8000/api/utilisateurs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
      },
      error: err => {
        this.error = "Erreur lors de la suppression.";
        console.error(err);
      }
    });
  }

  modifierUtilisateur(id: number) {
    this.router.navigate(['/admin/utilisateurs/edit', id]);
  }
}
