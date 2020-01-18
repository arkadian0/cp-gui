import { LoginRestService } from '../app/http/rest/LoginRestService';
import { SystemDevicesComponent } from '../app/components/parameter-details/system-devices/system-devices.component';
import { Ps2DevicesComponent } from '../app/components/parameter-details/ps2-devices/ps2-devices.component';
import { InputDevicesComponent } from '../app/components/parameter-details/input-devices/input-devices.component';
import { UsbDevicesComponent } from '../app/components/parameter-details/usb-devices/usb-devices.component';
import { InstalledApplicationComponent } from '../app/components/parameter-details/installed-application/installed-application.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './components/login/login.component';
import { MatProgressSpinnerModule, MatFormField, MatLabel, MatSelect, MatOption, MatSelectModule, MatOptionModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchByNetworkComponent } from './components/search-by-network/search-by-network.component';
import { WebStorageService } from './service/WebStorageService';
import { FindComputerRestService } from '../app/http/rest/FindComputerRestService';
import { ComputerParametersRestService } from '../app/http/rest/ComputerParametersRestService';
import { ViewParametersComponent } from '../app/components/view-parameters/view-parameters.component';
import { OperatingSystemComponent } from '../app/components/parameter-details/operating-system/operating-system.component';
import { BiosComponent } from '../app/components/parameter-details/bios/bios.component';
import { ProcesorComponent } from '../app/components/parameter-details/procesor/procesor.component';
import { InternalMemoryComponent } from '../app/components/parameter-details/internal-memory/internal-memory.component';
import { HardDiskComponent } from '../app/components/parameter-details/hard-disk/hard-disk.component';
import { GraphicCardComponent } from '../app/components/parameter-details/graphic-card/graphic-card.component';
import { NetworkComponent } from '../app/components/parameter-details/network/network.component';
import { SoundComponent } from '../app/components/parameter-details/sound/sound.component';
import { UsersComponent } from '../app/components/parameter-details/users/users.component';
import { VideoDevicesComponent } from '../app/components/parameter-details/video-devices/video-devices.component';
import { CaptureDevicesComponent } from '../app/components/parameter-details/capture-devices/capture-devices.component';
import { ChooseOptionsComponent } from './components/choose-options/choose-options.component';
import { AllParametersComponent } from '../app/components/parameter-details/all-parameters/all-parameters.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CompareComputersComponent } from './components/compare-computers/compare-computers.component';
import { HistoryParametersComponent } from './components/history-parameters/history-parameters.component';
import { LoginService } from './service/LoginService';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        SearchByNetworkComponent,
        ViewParametersComponent,
        OperatingSystemComponent,
        HardDiskComponent,
        InternalMemoryComponent,
        ProcesorComponent,
        BiosComponent,
        UsersComponent,
        SoundComponent,
        NetworkComponent,
        GraphicCardComponent,
        VideoDevicesComponent,
        InstalledApplicationComponent,
        UsbDevicesComponent,
        InputDevicesComponent,
        Ps2DevicesComponent,
        CaptureDevicesComponent,
        SystemDevicesComponent,
        ChooseOptionsComponent,
        AllParametersComponent,
        CompareComputersComponent,
        HistoryParametersComponent],
    providers: [WebStorageService, FindComputerRestService, ComputerParametersRestService,LoginRestService, LoginService],
    bootstrap: [AppComponent]
})

export class AppModule { }