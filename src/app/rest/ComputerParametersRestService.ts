import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ComputerParametersRestService {
  REST_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  checkComputerHasGeneratedSpecyfication(ipAddress: string): Observable<boolean> {
    const options = this.createAuthorization();
    return this.http.get<boolean>(this.REST_URL + '/parameter/generated/' + ipAddress, options);
  }

  createAuthorization() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
     });
    return { headers: headers };
  }

}