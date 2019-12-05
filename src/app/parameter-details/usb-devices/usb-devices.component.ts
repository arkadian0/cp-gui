import { UsbDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usb-devices',
  templateUrl: './usb-devices.component.html',
  styleUrls: ['./usb-devices.component.css']
})
export class UsbDevicesComponent implements OnInit {

  ipAddress: string;
  usbDevicesParameters: UsbDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getUsbDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.usbDevicesParameters = parameters;
      }
    });
  }

}
