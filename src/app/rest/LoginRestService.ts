import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginRestService {
  REST_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<Observable<Object>> {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username + ':' + password),
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.get<Observable<Object>>(this.REST_URL  + '/user', options);
  }

}
