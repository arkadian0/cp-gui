import { Processor } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-procesor',
  templateUrl: './procesor.component.html',
  styleUrls: ['./procesor.component.css']
})
export class ProcesorComponent implements OnInit {

  ipAddress: string;
  processorParameters: Processor[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getProcessorsByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.processorParameters = parameters;
      }
    });
  }


}
