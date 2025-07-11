import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  logout() {
    this.authService.logoutAndRedirect();
  }

  onLogin(): void {
    if (this.loginForm.invalid) return;

    this.errorMessage = null;
    const loginData = this.loginForm.value;

    this.http.post('http://localhost:8000/api/login', loginData).subscribe({
      next: (response: any) => {
        console.log('Connexion réussie', response);

        // ✅ Stocker token et infos utilisateur
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        // ✅ Fermer la modale
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
          // @ts-ignore
          const modal =
            bootstrap.Modal.getInstance(modalElement) ||
            new bootstrap.Modal(modalElement);
          modal.hide();
        }

        // ✅ Redirection vers dashboard selon rôle
        const role = response.user.role;
        if (role === 'admin') {
          this.router.navigate(['/admin']);
        } else if (role === 'formateur') {
          this.router.navigate(['/formateur']);
        } else if (role === 'participant') {
          this.router.navigate(['/participant']);
        }
      },
      error: (error) => {
        this.errorMessage =
          error.error?.message || 'Erreur lors de la connexion';
      },
    });
  }
}
