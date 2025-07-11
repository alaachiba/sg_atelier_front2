import { Component, OnInit } from '@angular/core';
import { AtelierService, Atelier } from '../../services/atelier.service';

@Component({
  selector: 'app-atelier-list',
  templateUrl: './atelier-list.component.html',
  styleUrls: ['./atelier-list.component.css']
})
export class AtelierListComponent implements OnInit {

  ateliers: Atelier[] = [];
  loading = true;
  error: string | null = null;

  constructor(private atelierService: AtelierService) { }

  ngOnInit(): void {
    this.atelierService.getAteliers().subscribe({
      next: (data) => {
        this.ateliers = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = "Erreur lors du chargement des ateliers";
        console.log(err)
        this.loading = false;
      }
    });
  }
}
