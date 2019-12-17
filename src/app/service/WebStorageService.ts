import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  constructor() { }
  getLocalStorage(key: any) {
    return JSON.parse(localStorage.getItem(key));
  }
  setLocalStorage(key: any, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getSessionStorage(key: any) {
    return JSON.parse(sessionStorage.getItem(key));
  }
  setSessionStorage(key: any, data: any): void {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
export enum NetworkAddressesStorageKey {
  key = "network_addresses"
}
export enum ComputerInfoSessionKey {
  key = "computer_info"
}
