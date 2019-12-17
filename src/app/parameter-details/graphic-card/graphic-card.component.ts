import { DisplayDevice } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';
@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.css']
})
export class GraphicCardComponent implements OnInit {

  computerName: string;
  displayDevicesParameters: DisplayDevice[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastDisplayDevicesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.displayDevicesParameters = parameters;
      }
    });
  }
}
