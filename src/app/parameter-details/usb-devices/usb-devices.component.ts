import { UsbDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-usb-devices',
  templateUrl: './usb-devices.component.html',
  styleUrls: ['./usb-devices.component.css']
})
export class UsbDevicesComponent implements OnInit {

  computerName: string;
  usbDevicesParameters: UsbDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
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
