import { Component, OnInit } from '@angular/core';
import { InternalMemory } from '../../transfer/command';
import { ActivatedRoute } from '@angular/router';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';

@Component({
  selector: 'app-internal-memory',
  templateUrl: './internal-memory.component.html',
  styleUrls: ['./internal-memory.component.css']
})
export class InternalMemoryComponent implements OnInit {

  computerName: string;
  internalMemoriesParameters: InternalMemory[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
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
