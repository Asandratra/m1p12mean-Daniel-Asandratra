import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private apiURL = `${environment.apiUrl}/payements`;

  constructor(
    private http: HttpClient,
  ) { }

  addPaiement(paiement: any): Observable<any> {
    return this.http.post(this.apiURL, paiement);
  }
}
