import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeRDVService {
  private apiUrl = `${environment.apiUrl}/demandesrdv`;

  constructor(private http:HttpClient) { }

  addDemandeRDV(demanderdv: any): Observable<any> {
    return this.http.post(this.apiUrl, demanderdv);
  }

  updateDemandeRDV(id: string, demande: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, demande);
  }

  getDemandesRDVByid(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  filterDemandesRDV(page: number, demandeRDV: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/search/${page}`, demandeRDV);
  }
}
