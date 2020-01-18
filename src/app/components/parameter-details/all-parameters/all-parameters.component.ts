import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllParameters } from '../../../http/transfer/command';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';

@Component({
  selector: 'app-all-parameters',
  templateUrl: './all-parameters.component.html',
  styleUrls: ['./all-parameters.component.css']
})
export class AllParametersComponent implements OnInit {

  computerName: string;
  allParameters = new Array<AllParameters>();
  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastAllParametersByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.allParameters.push(parameters);
      }
    });
  }


}
