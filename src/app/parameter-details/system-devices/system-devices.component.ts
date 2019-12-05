import { Component, OnInit } from '@angular/core';
import { SystemDevice } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-devices',
  templateUrl: './system-devices.component.html',
  styleUrls: ['./system-devices.component.css']
})
export class SystemDevicesComponent implements OnInit {

  ipAddress: string;
  systemDevicesParameters: SystemDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getSystemDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.systemDevicesParameters = parameters;
      }
    });
  }


}
