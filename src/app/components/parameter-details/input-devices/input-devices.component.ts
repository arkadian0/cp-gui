import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { InputDevice } from '../../../http/transfer/command';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-input-devices',
  templateUrl: './input-devices.component.html',
  styleUrls: ['./input-devices.component.css']
})
export class InputDevicesComponent implements OnInit {

  computerName: string;
  inputDevicesParameters: InputDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastInputDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.inputDevicesParameters = parameters;
      }
    });
  }
}
