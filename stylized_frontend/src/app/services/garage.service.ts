import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  private apiUrl = `${environment.apiUrl}/garages`;

  constructor(private httpClient : HttpClient) { }

  getListGarages(page:number, parameters:any) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/search/${page}`, parameters);
  }

  getGarageByIdAsClient(id:string) : Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/asClient/${id}`);
  }

  getGarageByIdAsManager(id:string) : Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/asManager/${id}`);
  }
}
