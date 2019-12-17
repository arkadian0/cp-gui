import { Component, OnInit } from '@angular/core';
import { SystemUser } from '../../transfer/command';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  computerName: string;
  usersParameters: SystemUser[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
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
