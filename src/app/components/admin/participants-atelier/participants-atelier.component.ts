import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtelierService } from 'src/app/services/atelier.service';

@Component({
  selector: 'app-participants-atelier',
  templateUrl: './participants-atelier.component.html',
  styleUrls: ['./participants-atelier.component.css']
})
export class ParticipantsAtelierComponent implements OnInit {

  atelierId!: number;
  participants: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private atelierService: AtelierService) {}

  ngOnInit(): void {
    this.atelierId = +this.route.snapshot.paramMap.get('id')!;
    this.loadParticipants();
  }

  loadParticipants() {
    this.atelierService.getParticipants(this.atelierId).subscribe({
      next: data => {
        this.participants = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Erreur lors du chargement des participants';
        this.loading = false;
      }
    });
  }
}
