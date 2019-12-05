import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginRestService } from '../rest/LoginRestService';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    model: any = {};
    userName: string;
    isAuthorizated = true;

    constructor(
        private loginRestService: LoginRestService,
        private router: Router
    ) { }

    ngOnInit() {
        sessionStorage.setItem('token', '');
    }

    login() {
        this.loginRestService.login(this.model.username, this.model.password).subscribe(principal => {
                sessionStorage.setItem('token', btoa(this.model.username + ':' + this.model.password));
                this.router.navigate(['/search-network']);
            },
            error => {
                if (error.status === 401) {
                    this.isAuthorizated = false;
                }
            }
        );
    }
}
