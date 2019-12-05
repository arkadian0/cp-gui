import { Component, OnInit } from '@angular/core';
import { InternalMemory } from 'src/app/transfer/command';
import { ComputerParametersRestService } from 'src/app/rest/ComputerParametersRestService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internal-memory',
  templateUrl: './internal-memory.component.html',
  styleUrls: ['./internal-memory.component.css']
})
export class InternalMemoryComponent implements OnInit {

  ipAddress: string;
  internalMemoriesParameters: InternalMemory[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.computerParametersService.getInternalMemoriesByIpAddress(this.ipAddress).subscribe(parameters => {
      if (parameters) {
        this.internalMemoriesParameters = parameters;
      }
    });
  }
}
