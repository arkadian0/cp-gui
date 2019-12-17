import { ComputerInfoSessionKey } from './../service/WebStorageService';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComputerInNetworkDTO } from '../transfer/command';
import { FindComputerRestService } from '../rest/FindComputerRestService';
import { HttpClient } from '@angular/common/http';
import { WebStorageService, NetworkAddressesStorageKey } from '../service/WebStorageService';
import { ComputerParametersRestService } from '../rest/ComputerParametersRestService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-network',
  templateUrl: './search-by-network.component.html',
  styleUrls: ['./search-by-network.component.css']
})
export class SearchByNetworkComponent implements OnInit {
  NETWORK_INFO_ITEM = 'NETWORK-INFO';
  networkInfo = new TemplateNetworkInfo();
  computerInfo = new ComputerInfo();
  computersInNetwork: ComputerInNetworkDTO[];
  isLoading = false;
  isGenerated = true;

  constructor(private findComputerRestService: FindComputerRestService,
    private http: HttpClient, private localStorageService: WebStorageService,
    private computerParametersService: ComputerParametersRestService, private router: Router) { }

  ngOnInit() {
    const storageNetworkInfo = this.localStorageService.getLocalStorage(NetworkAddressesStorageKey.key);
    if (storageNetworkInfo) {
      this.setValuesToFromFromLocalStorage(storageNetworkInfo);
      this.onSubmit();
    }
  }

  onSubmit() {
    this.isLoading = true;
    this.findComputerRestService.getActiveComputersInLocalAreaNetwork(this.networkInfo).subscribe(computers => {
      this.computersInNetwork = computers;
      this.isLoading = false;
    });
    this.localStorageService.setLocalStorage(NetworkAddressesStorageKey.key, this.networkInfo);
  }


  setValuesToFromFromLocalStorage(storageNetworkInfo) {
    this.networkInfo.networkIp = storageNetworkInfo.networkIp;
    this.networkInfo.rangeFrom = storageNetworkInfo.rangeFrom;
    this.networkInfo.rangeTo = storageNetworkInfo.rangeTo;
    this.networkInfo.computerName = storageNetworkInfo.computerName;
  }

  viewParameters(ipAddress: string, computerName: string, generationDate: any) {
    this.computerInfo.computerName = computerName;
    this.computerInfo.ipAddress = ipAddress;
    this.computerInfo.generationDate = generationDate;
    this.localStorageService.setSessionStorage(ComputerInfoSessionKey.key, this.computerInfo);
    this.router.navigate(['/choose-option']);
  }

}

class TemplateNetworkInfo {
  constructor(public networkIp?: string, public rangeFrom?: string, public rangeTo?: string, public computerName?: string) { }
}

class ComputerInfo {
  constructor(public ipAddress?: string, public computerName?: string, public generationDate?: any) { }
}

