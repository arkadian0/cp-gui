import { Component, OnInit } from '@angular/core';
import { VideoDevice } from '../../transfer/command';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-video-devices',
  templateUrl: './video-devices.component.html',
  styleUrls: ['./video-devices.component.css']
})
export class VideoDevicesComponent implements OnInit {

  computerName: string;
  videoDevicesParameters: VideoDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastVideoDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.videoDevicesParameters = parameters;
      }
    });
  }

}
