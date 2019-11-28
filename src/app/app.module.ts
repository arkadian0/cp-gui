import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SelectIpComponent } from './select-ip/select-ip.component';
import { MatProgressSpinnerModule} from '@angular/material';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchByNetworkComponent } from './search-by-network/search-by-network.component';
import { WebStorageService } from './service/WebStorageService';
import { FindComputerRestService } from './rest/FindComputerRestService';
import { ComputerParametersRestService } from './rest/ComputerParametersRestService';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        SelectIpComponent,
        SearchByNetworkComponent,
        ViewParametersComponent],
        providers : [WebStorageService, FindComputerRestService, ComputerParametersRestService],
    bootstrap: [AppComponent]
})

export class AppModule { }