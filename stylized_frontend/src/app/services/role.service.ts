import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = `${environment.apiUrl}/roles`;

  constructor(private httpClient : HttpClient) { }

  getAllRoles() : Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }
}
