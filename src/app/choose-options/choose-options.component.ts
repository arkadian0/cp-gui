import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../service/WebStorageService';
import { ComputerParametersRestService } from '../rest/ComputerParametersRestService';

@Component({
  selector: 'app-choose-options',
  templateUrl: './choose-options.component.html',
  styleUrls: ['./choose-options.component.css']
})
export class ChooseOptionsComponent implements OnInit {

  ipAddress: string;
  computerName: string;
  isShowGeneratePanel = false;
  isLoading = false;
  isOperationEnding = false;
  isGeneratedParameters = false;

  constructor(private computerParametersService: ComputerParametersRestService ,
    private route: ActivatedRoute, private router: Router, private localStorageService: WebStorageService) { }

  ngOnInit() {
    this.computerName = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key).computerName;
    this.ipAddress = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key).ipAddress;
  }

  displaySpecificParameters() {
    this.router.navigate(['/view-parameters/all-parameters']);
  }

  displayHistoryOfParameters() {
    this.router.navigate(['/history']);
  }

  displayCompareComputers() {
    this.router.navigate(['/compare-computers']);
  }

  showGeneratePanel() {
    this.isShowGeneratePanel = true;
  }

  generateComputerParameters() {
    this.isLoading = true;
    this.computerParametersService.generateComputerParameters(this.computerName).subscribe(isGenerated => {
      if (isGenerated) {
        this.isGeneratedParameters = isGenerated;
      }
      this.isLoading = false;
      this.isOperationEnding = true;
    });
  }
  closeWindow(event: Event)
  {
    event.stopPropagation();
    this.isShowGeneratePanel = false;
    this.isOperationEnding = false;
    this.isLoading = false;
  }
}
