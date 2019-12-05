import { Component, OnInit } from '@angular/core';
import { SoundDevice } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.css']
})
export class SoundComponent implements OnInit {

  ipAddress: string;
  soundsDevicesParameters: SoundDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getSoundDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.soundsDevicesParameters = parameters;
      }
    });
  }


}
