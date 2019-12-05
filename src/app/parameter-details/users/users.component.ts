import { Component, OnInit } from '@angular/core';
import { SystemUser } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  ipAddress: string;
  usersParameters: SystemUser[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getUsersByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.usersParameters = parameters;
      }
    });
  }

}
