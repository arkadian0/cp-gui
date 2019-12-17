import { Component, OnInit } from '@angular/core';
import { SoundDevice } from '../../transfer/command';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {

  computerName: string;
  soundsDevicesParameters: SoundDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLasttSoundDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.soundsDevicesParameters = parameters;
      }
    });
  }


}
