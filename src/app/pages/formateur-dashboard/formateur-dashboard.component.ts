import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formateur-dashboard',
  templateUrl: './formateur-dashboard.component.html',
  styleUrls: ['./formateur-dashboard.component.css']
})
export class FormateurDashboardComponent implements OnInit {
  ateliers: any[] = [];
  participants: any[] = [];
  selectedAtelierId: number | null = null;
  activeTab: string = 'ateliers';
  message: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAteliers();
  }

  loadAteliers(): void {
    const token = localStorage.getItem('token');
    this.http.get<any[]>('http://localhost:8000/api/ateliers', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (data) => this.ateliers = data,
      error: () => this.message = 'Erreur lors du chargement des ateliers.'
    });
  }

  loadParticipants(atelierId: number): void {
    const token = localStorage.getItem('token');
    this.http.get<any[]>(`http://localhost:8000/api/ateliers/${atelierId}/participants`, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (data) => {
        this.participants = data;
        this.selectedAtelierId = atelierId;
        this.activeTab = 'participants';
        this.message = null;
      },
      error: () => this.message = 'Erreur lors du chargement des participants.'
    });
  }
}
