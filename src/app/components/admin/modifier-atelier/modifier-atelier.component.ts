import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtelierService, Atelier } from 'src/app/services/atelier.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifier-atelier',
  templateUrl: './modifier-atelier.component.html',
  styleUrls: ['./modifier-atelier.component.css']
})
export class ModifierAtelierComponent implements OnInit {

  atelierForm!: FormGroup;
  formateurs: any[] = [];
  atelierId!: number;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private atelierService: AtelierService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.atelierId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadFormateurs();
    this.loadAtelier();
  }

  initForm() {
    this.atelierForm = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      lieu: ['', Validators.required],
      formateur_id: ['', Validators.required]
    });
  }

  loadFormateurs() {
    const token = localStorage.getItem('token');
    this.http.get<any[]>('http://localhost:8000/api/formateurs',{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: data => {
        this.formateurs = data;
      },
      error: err => console.error('Erreur chargement formateurs', err)
    });
  }

  // loadAtelier() {
  //   this.http.get<Atelier>(`http://localhost:8000/api/ateliers/${this.atelierId}`).subscribe({
  //     next: (atelier) => {
  //       this.atelierForm.patchValue(atelier);
  //     },
  //     error: (err) => {
  //       this.error = "Erreur lors du chargement de l'atelier";
  //       console.error(err);
  //     }
  //   });
  // }

  // loadAtelier() {
  //   this.http.get<Atelier>(`http://localhost:8000/api/ateliers/${this.atelierId}`).subscribe({
  //     next: (atelier) => {
  //       this.atelierForm.patchValue({
  //         ...atelier,
  //         date_debut: atelier.date_debut?.substring(0, 10),
  //         date_fin: atelier.date_fin?.substring(0, 10),
  //         formateur_id: atelier.formateur?.id || atelier.formateur_id
  //       });
  //     },
  //     error: (err) => {
  //       this.error = "Erreur lors du chargement de l'atelier";
  //       console.error(err);
  //     }
  //   });
  // }

  loadAtelier() {
    const token = localStorage.getItem('token');
    this.http.get<Atelier>(`http://localhost:8000/api/ateliers/${this.atelierId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).subscribe({
      next: (atelier) => {
        this.atelierForm.patchValue({
          titre: atelier.titre,
          description: atelier.description,
          date_debut: atelier.date_debut?.substring(0, 10),
          date_fin: atelier.date_fin?.substring(0, 10),
          lieu: atelier.lieu,
          formateur_id: atelier.formateur?.id || atelier.formateur_id
        });
      },
      error: (err) => {
        this.error = "Erreur lors du chargement de l'atelier";
        console.error(err);
      }
    });
  }

  // onSubmit() {
  //   if (this.atelierForm.invalid) return;

  //   this.http.put(`http://localhost:8000/api/ateliers/${this.atelierId}`, this.atelierForm.value).subscribe({
  //     next: () => this.router.navigate(['/admin/ateliers/list']),
  //     error: (err) => {
  //       this.error = "Erreur lors de la mise à jour";
  //       console.error(err);
  //     }
  //   });
  // }

  onSubmit() {
    if (this.atelierForm.invalid) return;
  
    const token = localStorage.getItem('token');
  
    this.http.put(
      `http://localhost:8000/api/ateliers/${this.atelierId}`,
      this.atelierForm.value,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).subscribe({
      next: () => this.router.navigate(['/admin/ateliers/list']),
      error: (err) => {
        this.error = "Erreur lors de la mise à jour";
        console.error(err);
      }
    });
  }
  
}
