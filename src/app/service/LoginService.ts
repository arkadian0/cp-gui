import { Injectable } from "@angular/core";
import { LoginRestService } from "../http/rest/LoginRestService";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private loginRestService: LoginRestService, private router: Router) { }


    isUserAvaliable() {
        const item = sessionStorage.getItem('token');
        if (item) {
            const userName = atob(item).split(':')[0];
            const password = atob(item).split(':')[1];
            this.loginRestService.login(userName, password).subscribe(principal => {
            },
                error => {
                    if (error.status === 401) {
                        this.router.navigate(['/login']);
                    }
                }
            );
        } else {
            this.router.navigate(['/login']);
        }
    }
}