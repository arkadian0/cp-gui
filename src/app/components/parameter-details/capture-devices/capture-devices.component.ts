import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaptureDevice } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';


@Component({
  selector: 'app-capture-devices',
  templateUrl: './capture-devices.component.html',
  styleUrls: ['./capture-devices.component.css']
})
export class CaptureDevicesComponent implements OnInit {

  computerName: string;
  captureDevicesParameters: CaptureDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastCaptureDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.captureDevicesParameters = parameters;
      }
    });
  }
}
