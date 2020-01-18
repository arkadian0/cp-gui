import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Processor } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-procesor',
  templateUrl: './procesor.component.html',
  styleUrls: ['./procesor.component.css']
})
export class ProcesorComponent implements OnInit {

  computerName: string;
  processorParameters: Processor[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
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
