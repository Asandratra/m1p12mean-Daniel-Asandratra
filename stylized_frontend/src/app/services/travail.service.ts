import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravailService {
  private apiURL = `${environment.apiUrl}/travaux`;

  constructor(
    private http: HttpClient,
  ) { }

  createTravail(travail: any): Observable<any> {
    return this.http.post(this.apiURL, travail);
  }

  filterTravail(page: number, travail: any): Observable<any> {
    return this.http.post(`${this.apiURL}/search/${page}`, travail);
  }

  getTravailById(id: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${id}`)
  }

  addServicesToTravail(travailId: string, serviceIds: string[]): Observable<any> {
    return this.http.put(`${this.apiURL}/addServices/${travailId}`, serviceIds);
  }

  addMecanoToTravail(travailId: string, mecanoIds: string[]): Observable<any> {
    return this.http.put(`${this.apiURL}/addMecano/${travailId}`, mecanoIds);
  }

  updateStatusTravail(travailId: string, status: number): Observable<any> {
    const statusChange={
      status : status
    }
    return this.http.put(`${this.apiURL}/${travailId}`, statusChange);
  }
}
