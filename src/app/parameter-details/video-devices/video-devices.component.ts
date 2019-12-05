import { Component, OnInit } from '@angular/core';
import { VideoDevice } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-devices',
  templateUrl: './video-devices.component.html',
  styleUrls: ['./video-devices.component.css']
})
export class VideoDevicesComponent implements OnInit {

  ipAddress: string;
  videoDevicesParameters: VideoDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getVideoDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.videoDevicesParameters = parameters;
      }
    });
  }

}
