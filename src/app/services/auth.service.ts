import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // supprimer aussi les autres infos de session si besoin
  }

  logoutAndRedirect() {
    this.logout().subscribe({
      next: () => {
        this.clearSession();
        this.router.navigate(['/']);  // rediriger vers login
      },
      error: () => {
        this.clearSession();
        this.router.navigate(['/']);
      }
    });
  }

  getUtilisateurConnecte() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(`${this.apiUrl}/user`, { headers });
  }
}
