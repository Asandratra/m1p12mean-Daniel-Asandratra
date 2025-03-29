import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private apiUrl = `${environment.apiUrl}/rendezvous`;

  constructor(private http:HttpClient) { }

  addDemandeRDV(demanderdv: any): Observable<any> {
    return this.http.post(this.apiUrl, demanderdv);
  }

  get10NextOfAGarage(idGarage:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/next-rendez-vous/${idGarage}`,{});
  }

  updateRendezVous(id: string, rendezVous: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, rendezVous);
  }

  filterRendezVous(page: number, rendezvous: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search/${page}`, rendezvous);
  }
}
