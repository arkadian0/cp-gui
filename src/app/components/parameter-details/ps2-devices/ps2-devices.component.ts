import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ps2Device } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-ps2-devices',
  templateUrl: './ps2-devices.component.html',
  styleUrls: ['./ps2-devices.component.css']
})
export class Ps2DevicesComponent implements OnInit {

  computerName: string;
  ps2DevicesParameters: Ps2Device[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
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
