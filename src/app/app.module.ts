import { SystemDevicesComponent } from './parameter-details/system-devices/system-devices.component';
import { Ps2DevicesComponent } from './parameter-details/ps2-devices/ps2-devices.component';
import { InputDevicesComponent } from './parameter-details/input-devices/input-devices.component';
import { UsbDevicesComponent } from './parameter-details/usb-devices/usb-devices.component';
import { InstalledApplicationComponent } from './parameter-details/installed-application/installed-application.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { SelectIpComponent } from './select-ip/select-ip.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchByNetworkComponent } from './search-by-network/search-by-network.component';
import { WebStorageService } from './service/WebStorageService';
import { FindComputerRestService } from './rest/FindComputerRestService';
import { ComputerParametersRestService } from './rest/ComputerParametersRestService';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';
import { OperatingSystemComponent } from './parameter-details/operating-system/operating-system.component';
import { BiosComponent } from './parameter-details/bios/bios.component';
import { ProcesorComponent } from './parameter-details/procesor/procesor.component';
import { InternalMemoryComponent } from './parameter-details/internal-memory/internal-memory.component';
import { HardDiskComponent } from './parameter-details/hard-disk/hard-disk.component';
import { GraphicCardComponent } from './parameter-details/graphic-card/graphic-card.component';
import { NetworkComponent } from './parameter-details/network/network.component';
import { SoundComponent } from './parameter-details/sound/sound.component';
import { UsersComponent } from './parameter-details/users/users.component';
import { VideoDevicesComponent } from './parameter-details/video-devices/video-devices.component';
import { CaptureDevicesComponent } from './parameter-details/capture-devices/capture-devices.component';

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
        LoginComponent,
        SelectIpComponent,
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
        SystemDevicesComponent],
    providers: [WebStorageService, FindComputerRestService, ComputerParametersRestService],
    bootstrap: [AppComponent]
})

export class AppModule { }