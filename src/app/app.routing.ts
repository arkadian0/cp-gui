import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';


export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'view-parameters/:ipAddress', component: ViewParametersComponent },
    { path: '**', redirectTo: '' },
  ];

export const routing = RouterModule.forRoot(routes);