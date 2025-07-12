import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-utilisateur',
  templateUrl: './ajouter-utilisateur.component.html',
  styleUrls: ['./ajouter-utilisateur.component.css']
})
export class AjouterUtilisateurComponent implements OnInit {
  utilisateurForm!: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.utilisateurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.utilisateurForm.invalid) return;

    const token = localStorage.getItem('token');

    this.http.post('http://localhost:8000/api/utilisateurs', this.utilisateurForm.value, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => this.router.navigate(['/admin/utilisateurs']),
      error: (err) => {
        this.error = 'Erreur lors de la création de l\'utilisateur';
        console.error(err);
      }
    });
  }
}
