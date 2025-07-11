import { Component, OnInit } from '@angular/core';
import { AtelierService, Atelier } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-participant-dashboard',
  templateUrl: './participant-dashboard.component.html',
  styleUrls: ['./participant-dashboard.component.css']
})
export class ParticipantDashboardComponent implements OnInit {
  ateliers: Atelier[] = [];
  message: string | null = null;
  ateliersInscrits: number[] = [];

  constructor(private atelierService: AtelierService) {}

  ngOnInit(): void {
    this.loadAteliers();
    this.loadInscriptions();
  }

  loadAteliers(): void {
    this.atelierService.getAteliers().subscribe({
      next: (data) => {
        this.ateliers = data;
      },
      error: () => {
        this.message = 'Erreur lors du chargement des ateliers.';
      }
    });
  }

  loadInscriptions(): void {
    this.atelierService.getInscriptions().subscribe({
      next: (inscriptions) => {
        this.ateliersInscrits = inscriptions.map(atelier => atelier.id);
      },
      error: () => {
        this.message = 'Erreur lors du chargement des inscriptions.';
      }
    });
  }

  inscrire(id: number): void {
    this.atelierService.inscrireAtelier(id).subscribe({
      next: () => {
        this.message = 'Inscription réussie !';
        this.ateliersInscrits.push(id); // mise à jour immédiate locale
      },
      error: (err) => {
        this.message = err.error?.message || 'Erreur lors de l’inscription.';
      }
    });
  }

  estInscrit(id: number): boolean {
    return this.ateliersInscrits.includes(id);
  }

  annulerInscription(id: number): void {
    this.atelierService.annulerInscription(id).subscribe({
      next: () => {
        this.message = 'Inscription annulée avec succès !';
        // Mise à jour locale : enlever l'atelier de la liste des inscrits
        this.ateliersInscrits = this.ateliersInscrits.filter(aid => aid !== id);
      },
      error: (err) => {
        this.message = err.error?.message || 'Erreur lors de l’annulation.';
      }
    });
  }
}
