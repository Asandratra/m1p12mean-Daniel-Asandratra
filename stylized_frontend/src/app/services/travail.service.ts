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
}
