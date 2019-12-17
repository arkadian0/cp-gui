import { Ps2Device } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';


@Component({
  selector: 'app-ps2-devices',
  templateUrl: './ps2-devices.component.html',
  styleUrls: ['./ps2-devices.component.css']
})
export class Ps2DevicesComponent implements OnInit {

  computerName: string;
  ps2DevicesParameters: Ps2Device[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastPs2DevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.ps2DevicesParameters = parameters;
      }
    });
  }
}
