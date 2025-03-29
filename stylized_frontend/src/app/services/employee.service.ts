import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiURL = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient) { }

  signupEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.apiURL}/signup`, employee);
  }

  signinEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.apiURL}/signin`, employee);
  }
  
}
