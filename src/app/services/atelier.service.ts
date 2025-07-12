import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Formateur {
  id: number;
  nom: string;
  prenom: string;
}

export interface Atelier {
  id: number;
  titre: string;
  description?: string;
  date_debut: string;
  date_fin: string;
  lieu: string;
  created_at?: string;
  updated_at?: string;
  formateur?: Formateur;
  formateur_id?: number;
}

export interface Inscription {
  id: number;
  atelier_id: number;
  utilisateur_id: number;
  created_at?: string;
  updated_at?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AtelierService {

  private apiUrl = 'http://localhost:8000/api/ateliers';

  constructor(private http: HttpClient) { }

  

  getAteliers(): Observable<Atelier[]> {
    //const token = localStorage.getItem('token');
    return this.http.get<Atelier[]>(this.apiUrl)
    // , {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
  }

  getInscriptions(): Observable<Inscription[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Inscription[]>('http://localhost:8000/api/mes-inscriptions', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  

  inscrireAtelier(atelierId: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(
      'http://localhost:8000/api/inscriptions',
      { atelier_id: atelierId },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }

  annulerInscription(atelierId: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(
      `http://localhost:8000/api/inscriptions/atelier/${atelierId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
  }

  deleteAtelier(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.delete(`http://localhost:8000/api/ateliers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getParticipants(atelierId: number): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.http.get<any[]>(`http://localhost:8000/api/ateliers/${atelierId}/participants`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  getParticipantsByAtelier(atelierId: number): Observable<any[]> {
    const token = localStorage.getItem('token');
    return this.http.get<any[]>(`http://localhost:8000/api/ateliers/${atelierId}/participants`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
 
}
