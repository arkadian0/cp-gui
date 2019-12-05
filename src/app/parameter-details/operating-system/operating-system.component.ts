import { OperatingSystem } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.css']
})
export class OperatingSystemComponent implements OnInit {

  ipAddress: string;
  operatingSystemParameters: OperatingSystem[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getOperatingSystemByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.operatingSystemParameters = parameters;
      }
    });
  }

}
