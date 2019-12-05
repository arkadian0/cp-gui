import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';
import { Bios } from 'src/app/transfer/command';

@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {

  ipAddress: string;
  biosParameters: Bios[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getBiosByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.biosParameters = parameters;
      }
    });
  }

}
