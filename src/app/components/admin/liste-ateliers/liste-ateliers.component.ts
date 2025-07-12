import { Component, OnInit } from '@angular/core';
import { AtelierService, Atelier } from '../../../services/atelier.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-ateliers',
  templateUrl: './liste-ateliers.component.html',
  styleUrls: ['./liste-ateliers.component.css']
})
export class ListeAteliersComponent implements OnInit {

  ateliers: Atelier[] = [];
  loading = true;
  error: string | null = null;

  constructor(private atelierService: AtelierService, private router: Router) {}

  ngOnInit(): void {
    this.atelierService.getAteliers().subscribe({
      next: (data) => {
        this.ateliers = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Erreur lors du chargement des ateliers";
        this.loading = false;
        console.error(err);
      }
    });
  }

  onDelete(atelierId: number): void {
    if (!confirm('Voulez-vous vraiment supprimer cet atelier ?')) return;
  
    this.atelierService.deleteAtelier(atelierId).subscribe({
      next: () => {
        this.ateliers = this.ateliers.filter(a => a.id !== atelierId);
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la suppression');
      }
    });
  }

  onEdit(id: number) {
    this.router.navigate(['/admin/ateliers/edit', id]);
  }

  voirParticipants(id: number) {
    this.router.navigate([`/admin/ateliers/${id}/participants`]);
  }
}
