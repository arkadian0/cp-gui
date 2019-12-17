import { Component, OnInit } from '@angular/core';
import { SystemDevice } from '../../transfer/command';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';


@Component({
  selector: 'app-system-devices',
  templateUrl: './system-devices.component.html',
  styleUrls: ['./system-devices.component.css']
})
export class SystemDevicesComponent implements OnInit {

  computerName: string;
  systemDevicesParameters: SystemDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastSystemDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.systemDevicesParameters = parameters;
      }
    });
  }


}
