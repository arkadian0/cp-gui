import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NetworkCard } from '../../../http/transfer/command';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  computerName: string;
  networksParameters: NetworkCard[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastNetworkCardsByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.networksParameters = parameters;
      }
    });
  }

}
