import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemUser } from '../../../http/transfer/command';
import { WebStorageService, ComputerInfoSessionKey } from '../../../service/WebStorageService';
import { ComputerParametersRestService } from '../../../http/rest/ComputerParametersRestService';
import { LoginService } from '../../../service/LoginService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  computerName: string;
  usersParameters: SystemUser[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService, private loginService: LoginService) { }

    ngOnInit() {
      this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastUsersByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        console.log(parameters);
        this.usersParameters = parameters;
      }
    });
  }

}
