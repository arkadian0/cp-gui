import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bios } from '../../transfer/command';
import { ComputerParametersRestService } from '../../rest/ComputerParametersRestService';
import { WebStorageService, ComputerInfoSessionKey } from '../../service/WebStorageService';


@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.css']
})
export class BiosComponent implements OnInit {

  computerName: string;
  biosParameters: Bios[];

  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute ,
    private localStorageService: WebStorageService) { }
  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
    }
    this.computerParametersService.getLastBiosByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.biosParameters = parameters;
      }
    });
  }

}
