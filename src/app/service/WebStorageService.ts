import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
   })
   export class WebStorageService {
     constructor() { }
     getLocalStorage(key: NetworkAddressesStorageKey) {
       return JSON.parse(localStorage.getItem(key));
     }
     setLocalStorage(key: NetworkAddressesStorageKey, data: any): void {
       localStorage.setItem(key, JSON.stringify(data));
     }
     getSessionStorage(key: NetworkAddressesStorageKey) {
       return JSON.parse(sessionStorage.getItem(key));
     }
     setSessionStorage(key: NetworkAddressesStorageKey, data: any): void {
       sessionStorage.setItem(key, JSON.stringify(data));
     }
   }
   export enum NetworkAddressesStorageKey {
     key = "network_addresses"
   }