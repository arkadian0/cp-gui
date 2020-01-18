import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HardDrive } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';
@Component({
  selector: 'app-hard-disk',
  templateUrl: './hard-disk.component.html',
  styleUrls: ['./hard-disk.component.css']
})
export class HardDiskComponent implements OnInit {

  computerName: string;
  hardDrivesParameters: HardDrive[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastHardDisksByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.hardDrivesParameters = parameters;
      }
    });
  }

}
