import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstalledApplication } from '../../../http/transfer/command';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';

@Component({
  selector: 'app-installed-application',
  templateUrl: './installed-application.component.html',
  styleUrls: ['./installed-application.component.css']
})
export class InstalledApplicationComponent implements OnInit {

  computerName: string;
  installedApplicationsParameters: InstalledApplication[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
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
