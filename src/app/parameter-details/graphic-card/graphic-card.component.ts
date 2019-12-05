import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { DisplayDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css']
})
export class GraphicCardComponent implements OnInit {

  ipAddress: string;
  displayDevicesParameters: DisplayDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getDisplayDevicesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.displayDevicesParameters = parameters;
      }
    });
  }
}
