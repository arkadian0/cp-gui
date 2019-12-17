import { OperatingSystem, Bios, CaptureDevice, InputDevice, HardDrive, DisplayDevice, InternalMemory, Processor, SoundDevice, Ps2Device, SystemDevice, SystemUser, UsbDevice, VideoDevice, InstalledApplication, NetworkCard } from '../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';
import { AllParameters } from '../../transfer/command';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';
@Component({
  selector: 'app-all-parameters',
  templateUrl: './all-parameters.component.html',
  styleUrls: ['./all-parameters.component.css']
})
export class AllParametersComponent implements OnInit {

  computerName: string;
  allParameters = new Array<AllParameters>();
  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
     private localStorageService: WebStorageService) { }

  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService. getLastAllParametersByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
      this.allParameters.push(parameters);
      }
    });
  }


}
