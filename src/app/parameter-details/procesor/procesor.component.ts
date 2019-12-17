import { Processor } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-procesor',
  templateUrl: './procesor.component.html',
  styleUrls: ['./procesor.component.css']
})
export class ProcesorComponent implements OnInit {

  computerName: string;
  processorParameters: Processor[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastProcessorsByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.processorParameters = parameters;
      }
    });
  }


}
