import { InputDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-input-devices',
  templateUrl: './input-devices.component.html',
  styleUrls: ['./input-devices.component.css']
})
export class InputDevicesComponent implements OnInit {

  computerName: string;
  inputDevicesParameters: InputDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
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
