import { Component, OnInit } from '@angular/core';
import { NetworkCard } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  ipAddress: string;
  networksParameters: NetworkCard[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getNetworkCardsByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.networksParameters = parameters;
      }
    });
  }

}
