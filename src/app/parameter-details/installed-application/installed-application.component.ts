import { Component, OnInit } from '@angular/core';
import { InstalledApplication } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-installed-application',
  templateUrl: './installed-application.component.html',
  styleUrls: ['./installed-application.component.css']
})
export class InstalledApplicationComponent implements OnInit {

  ipAddress: string;
  installedApplicationsParameters: InstalledApplication[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getInstalledApplicationsByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.installedApplicationsParameters = parameters;
      }
    });
  }
}
