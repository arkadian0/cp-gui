import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { CaptureDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-capture-devices',
  templateUrl: './capture-devices.component.html',
  styleUrls: ['./capture-devices.component.css']
})
export class CaptureDevicesComponent implements OnInit {

  ipAddress: string;
  captureDevicesParameters: CaptureDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getCaptureDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.captureDevicesParameters = parameters;
      }
    });
  }
}
