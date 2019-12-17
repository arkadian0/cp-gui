import { Component, OnInit } from '@angular/core';
import { InstalledApplication } from '../../transfer/command';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-installed-application',
  templateUrl: './installed-application.component.html',
  styleUrls: ['./installed-application.component.css']
})
export class InstalledApplicationComponent implements OnInit {

  computerName: string;
  installedApplicationsParameters: InstalledApplication[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastInstalledApplicationsByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.installedApplicationsParameters = parameters;
      }
    });
  }
}
