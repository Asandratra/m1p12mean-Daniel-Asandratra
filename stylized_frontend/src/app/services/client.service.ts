import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiURL = `${environment.apiUrl}/clients`;

  constructor(private http: HttpClient) { }

  signupClient(client: any): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, client);
  }

  signinClient(client: any): Observable<any> {
    return this.http.post(`${this.apiURL}/signin`, client);
  }

  getAllClient(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
