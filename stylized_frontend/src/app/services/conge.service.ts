import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  private apiURL = `${environment.apiUrl}/conges`;

  constructor(private http: HttpClient) { }

  createConge(conge:any) : Observable<any> {
    return this.http.post(this.apiURL,conge);
  }
}
