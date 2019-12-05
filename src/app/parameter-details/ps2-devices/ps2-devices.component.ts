import { Ps2Device } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ps2-devices',
  templateUrl: './ps2-devices.component.html',
  styleUrls: ['./ps2-devices.component.css']
})
export class Ps2DevicesComponent implements OnInit {

  ipAddress: string;
  ps2DevicesParameters: Ps2Device[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getPs2DevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.ps2DevicesParameters = parameters;
      }
    });
  }
}
