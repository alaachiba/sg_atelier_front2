import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {
  utilisateurForm!: FormGroup;
  utilisateurId!: number;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.utilisateurId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadUtilisateur();
  }

  initForm() {
    this.utilisateurForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      mot_de_passe: [''] // facultatif si tu veux permettre la mise à jour du mot de passe
    });
  }

  loadUtilisateur() {
    const token = localStorage.getItem('token');
    this.http.get<any>(`http://localhost:8000/api/utilisateurs/${this.utilisateurId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (data) => {
        this.utilisateurForm.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          role: data.role
        });
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement de l\'utilisateur';
        console.error(err);
      }
    });
  }

  onSubmit() {
    if (this.utilisateurForm.invalid) return;

    const token = localStorage.getItem('token');
    const payload = { ...this.utilisateurForm.value };

    // Si mot_de_passe est vide, on ne l'envoie pas pour ne pas écraser le mot de passe
    if (!payload.mot_de_passe) {
      delete payload.mot_de_passe;
    }

    this.http.put(`http://localhost:8000/api/utilisateurs/${this.utilisateurId}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: () => {
        this.router.navigate(['/admin/utilisateurs']);
      },
      error: (err) => {
        this.error = 'Erreur lors de la mise à jour';
        console.error(err);
      }
    });
  }
}
