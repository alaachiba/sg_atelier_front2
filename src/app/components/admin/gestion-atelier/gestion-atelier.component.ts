import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gestion-atelier',
  templateUrl: './gestion-atelier.component.html',
  styleUrls: ['./gestion-atelier.component.css']
})
export class GestionAtelierComponent implements OnInit {

  atelierForm!: FormGroup;
  formateurs: any[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initForm();
    this.loadFormateurs();
  }

  initForm(): void {
    this.atelierForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      lieu: ['', Validators.required],
      formateur_id: ['', Validators.required]
    });
  }

  loadFormateurs(): void {
    const token = localStorage.getItem('token');
    this.http.get<any[]>('http://localhost:8000/api/utilisateurs', {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).subscribe({
      next: (data) => {
        this.formateurs = data.filter(user => user.role === 'formateur');
      },
      error: () => {
        this.errorMessage = 'Erreur lors du chargement des formateurs';
      }
    });
  }

  onSubmit(): void {
    if (this.atelierForm.invalid) return;

    const token = localStorage.getItem('token');
    this.http.post('http://localhost:8000/api/ateliers', this.atelierForm.value, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    }).subscribe({
      next: () => {
        this.successMessage = 'Atelier créé avec succès';
        this.errorMessage = '';
        this.atelierForm.reset();
      },
      error: () => {
        this.successMessage = '';
        this.errorMessage = 'Erreur lors de la création de l\'atelier';
      }
    });
  }
}
