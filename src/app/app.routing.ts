import { HistoryParametersComponent } from './components/history-parameters/history-parameters.component';
import { CompareComputersComponent } from './components/compare-computers/compare-computers.component';
import { AllParametersComponent } from '../app/components/parameter-details/all-parameters/all-parameters.component';
import { ChooseOptionsComponent } from './components/choose-options/choose-options.component';
import { CaptureDevicesComponent } from '../app/components/parameter-details/capture-devices/capture-devices.component';
import { VideoDevicesComponent } from '../app/components/parameter-details/video-devices/video-devices.component';
import { SystemDevicesComponent } from '../app/components/parameter-details/system-devices/system-devices.component';
import { Ps2DevicesComponent } from '../app/components/parameter-details/ps2-devices/ps2-devices.component';
import { InputDevicesComponent } from '../app/components/parameter-details/input-devices/input-devices.component';
import { UsbDevicesComponent } from '../app/components/parameter-details/usb-devices/usb-devices.component';
import { InstalledApplicationComponent } from '../app/components/parameter-details/installed-application/installed-application.component';
import { UsersComponent } from '../app/components/parameter-details/users/users.component';
import { NetworkComponent } from '../app/components/parameter-details/network/network.component';
import { GraphicCardComponent } from '../app/components/parameter-details/graphic-card/graphic-card.component';
import { HardDiskComponent } from '../app/components/parameter-details/hard-disk/hard-disk.component';
import { InternalMemoryComponent } from '../app/components/parameter-details/internal-memory/internal-memory.component';
import { ProcesorComponent } from '../app/components/parameter-details/procesor/procesor.component';
import { BiosComponent } from '../app/components/parameter-details/bios/bios.component';
import { OperatingSystemComponent } from '../app/components/parameter-details/operating-system/operating-system.component';
import { SearchByNetworkComponent } from '../app/components/search-by-network/search-by-network.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { ViewParametersComponent } from '../app/components/view-parameters/view-parameters.component';
import { SoundComponent } from './components/parameter-details/sound/sound.component';



export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search-network', component: SearchByNetworkComponent },
  { path: 'choose-option', component: ChooseOptionsComponent },
  { path: 'compare-computers', component: CompareComputersComponent },
  { path: 'history', component: HistoryParametersComponent },
  { path: 'view-parameters', component: ViewParametersComponent, children: [
      { path: 'all-parameters', component: AllParametersComponent },
      { path: 'operating-systems', component: OperatingSystemComponent },
      { path: 'bios', component: BiosComponent },
      { path: 'processors', component: ProcesorComponent },
      { path: 'internal-memories', component: InternalMemoryComponent },
      { path: 'hard-disks', component: HardDiskComponent },
      { path: 'graphics', component: GraphicCardComponent },
      { path: 'networks', component: NetworkComponent },
      { path: 'sounds', component: SoundComponent },
      { path: 'users', component: UsersComponent },
      { path: 'installed-applications', component: InstalledApplicationComponent },
      { path: 'usb-devices', component: UsbDevicesComponent },
      { path: 'input-devices', component: InputDevicesComponent },
      { path: 'ps2-devices', component: Ps2DevicesComponent },
      { path: 'capture-devices', component: CaptureDevicesComponent },
      { path: 'video-devices', component: VideoDevicesComponent },
      { path: 'system-devices', component: SystemDevicesComponent },
    ]
  },

  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(routes);

