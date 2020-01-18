import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsbDevice } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-usb-devices',
  templateUrl: './usb-devices.component.html',
  styleUrls: ['./usb-devices.component.css']
})
export class UsbDevicesComponent implements OnInit {

  computerName: string;
  usbDevicesParameters: UsbDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastUsbDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.usbDevicesParameters = parameters;
      }
    });
  }

}
