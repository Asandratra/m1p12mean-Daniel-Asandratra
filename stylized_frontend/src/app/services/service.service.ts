import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiURL = `${environment.apiUrl}/services`;

  constructor(private httpClient: HttpClient) { }

  getAllServices() : Observable<any> {
    return this.httpClient.get(`${this.apiURL}`);
  }
}
