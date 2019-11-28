import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

    userName: string;

    constructor(private http: HttpClient, private router: Router) { }

    ngOnInit() {
        const item = sessionStorage.getItem('token');
        if (item) {
        this.userName = atob(item).split(':')[0];
        } else {
            this.router.navigate(['/login']);
        }

    }
    logout() {
        sessionStorage.setItem('token', '');
    }
}
