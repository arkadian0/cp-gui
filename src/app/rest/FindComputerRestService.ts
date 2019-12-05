import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddressRangeCommand, ComputerInNetworkDTO, OperatingSystem } from '../transfer/command';

@Injectable()
export class FindComputerRestService {
  REST_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getActiveComputersInLocalAreaNetwork(addressRangeCommand: AddressRangeCommand): Observable<ComputerInNetworkDTO[]> {
    const options = this.createAuthorization();
    return this.http.post<ComputerInNetworkDTO[]>(this.REST_URL + '/search/active-computers', addressRangeCommand, options);
  }
  
  createAuthorization() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }

}