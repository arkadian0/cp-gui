import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { HardDrive } from './../../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hard-disk',
  templateUrl: './hard-disk.component.html',
  styleUrls: ['./hard-disk.component.css']
})
export class HardDiskComponent implements OnInit {

  ipAddress: string;
  hardDrivesParameters: HardDrive[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getHardDisksByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.hardDrivesParameters = parameters;
      }
    });
  }

}
