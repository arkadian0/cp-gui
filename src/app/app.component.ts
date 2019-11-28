import { FindComputerRestService } from './rest/FindComputerRestService';
import { Component } from '@angular/core';
import { LoginRestService } from './rest/LoginRestService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [LoginRestService, FindComputerRestService]
})

export class AppComponent { }
