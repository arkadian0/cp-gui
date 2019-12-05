import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { InputDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input-devices',
  templateUrl: './input-devices.component.html',
  styleUrls: ['./input-devices.component.css']
})
export class InputDevicesComponent implements OnInit {

  ipAddress: string;
  inputDevicesParameters: InputDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getInputDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.inputDevicesParameters = parameters;
      }
    });
  }
}
