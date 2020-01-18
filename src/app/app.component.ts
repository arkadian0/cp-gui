import { FindComputerRestService } from '../app/http/rest/FindComputerRestService';
import { Component } from '@angular/core';
import { LoginRestService } from '../app/http/rest/LoginRestService';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LoginRestService, FindComputerRestService]
})

export class AppComponent {

    userName: string;

    constructor(private http: HttpClient, private router: Router) { }

    logout() {
        sessionStorage.setItem('token', '');
    }
    
    isUserAvaliable() {
        const item = sessionStorage.getItem('token');
        if (item) {
            this.userName = atob(item).split(':')[0];
            return true;
        }
    }

}
