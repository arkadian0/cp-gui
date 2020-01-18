import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternalMemory } from '../../../http/transfer/command';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-internal-memory',
  templateUrl: './internal-memory.component.html',
  styleUrls: ['./internal-memory.component.css']
})
export class InternalMemoryComponent implements OnInit {

  computerName: string;
  internalMemoriesParameters: InternalMemory[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastInternalMemoriesByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.internalMemoriesParameters = parameters;
      }
    });
  }
}
