import { CaptureDevicesComponent } from './parameter-details/capture-devices/capture-devices.component';
import { VideoDevicesComponent } from './parameter-details/video-devices/video-devices.component';
import { SystemDevicesComponent } from './parameter-details/system-devices/system-devices.component';
import { Ps2DevicesComponent } from './parameter-details/ps2-devices/ps2-devices.component';
import { InputDevicesComponent } from './parameter-details/input-devices/input-devices.component';
import { UsbDevicesComponent } from './parameter-details/usb-devices/usb-devices.component';
import { InstalledApplicationComponent } from './parameter-details/installed-application/installed-application.component';
import { UsersComponent } from './parameter-details/users/users.component';
import { NetworkComponent } from './parameter-details/network/network.component';
import { GraphicCardComponent } from './parameter-details/graphic-card/graphic-card.component';
import { HardDiskComponent } from './parameter-details/hard-disk/hard-disk.component';
import { InternalMemoryComponent } from './parameter-details/internal-memory/internal-memory.component';
import { ProcesorComponent } from './parameter-details/procesor/procesor.component';
import { BiosComponent } from './parameter-details/bios/bios.component';
import { OperatingSystemComponent } from './parameter-details/operating-system/operating-system.component';
import { SearchByNetworkComponent } from './search-by-network/search-by-network.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewParametersComponent } from './view-parameters/view-parameters.component';
import { SoundComponent } from './parameter-details/sound/sound.component';


export const routes: Routes = [
    { path: '', component: SearchByNetworkComponent},
    { path: 'search-network', component: SearchByNetworkComponent},
    { path: 'view-parameters/:ipAddress', component: ViewParametersComponent },
    { path: 'login', component: LoginComponent },
    { path: 'operating-systems/details/:ipAddress', component: OperatingSystemComponent},
    { path: 'bios/details/:ipAddress', component: BiosComponent},
    { path: 'processors/details/:ipAddress', component: ProcesorComponent},
    { path: 'internal-memories/details/:ipAddress', component: InternalMemoryComponent},
    { path: 'hard-disks/details/:ipAddress', component: HardDiskComponent},
    { path: 'graphics/details/:ipAddress', component: GraphicCardComponent},
    { path: 'networks/details/:ipAddress', component: NetworkComponent},
    { path: 'sounds/details/:ipAddress', component: SoundComponent},
    { path: 'users/details/:ipAddress', component: UsersComponent},
    { path: 'installed-applications/details/:ipAddress', component: InstalledApplicationComponent},
    { path: 'usb-devices/details/:ipAddress', component: UsbDevicesComponent},
    { path: 'input-devices/details/:ipAddress', component: InputDevicesComponent},
    { path: 'ps2-devices/details/:ipAddress', component: Ps2DevicesComponent},
    { path: 'capture-devices/details/:ipAddress', component: CaptureDevicesComponent},
    { path: 'video-devices/details/:ipAddress', component: VideoDevicesComponent},
    { path: 'system-devices/details/:ipAddress', component: SystemDevicesComponent},
    { path: '**', redirectTo: '' },
  ];

export const routing = RouterModule.forRoot(routes);

