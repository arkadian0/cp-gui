import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoDevice } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-video-devices',
  templateUrl: './video-devices.component.html',
  styleUrls: ['./video-devices.component.css']
})
export class VideoDevicesComponent implements OnInit {

  computerName: string;
  videoDevicesParameters: VideoDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
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
