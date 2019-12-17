import { ComputerInfoDTO, AllParameters } from './../transfer/command';
import { Component, OnInit } from '@angular/core';
import { ComputerParametersRestService } from '../rest/ComputerParametersRestService';
import { Router, ActivatedRoute } from '@angular/router';
import { WebStorageService, ComputerInfoSessionKey } from '../service/WebStorageService';
import { FindComputerRestService } from '../rest/FindComputerRestService';

@Component({
  selector: 'app-history-parameters',
  templateUrl: './history-parameters.component.html',
  styleUrls: ['./history-parameters.component.css']
})
export class HistoryParametersComponent implements OnInit {

  selectedOption: ComputerInfoDTO;
  computerName: string;
  ipAddress: string;
  lastGenerationDate: string;
  computersInfo: ComputerInfoDTO[];
  checkAll = false;
  unCheckAll = false;
  checkedOperatingSystem = false;
  checkedBios = false;
  checkedProcesor = false;
  checkedInternalMemory = false;
  checkedHardDrive = false;
  checkedGraphics = false;
  checkedNetwork = false;
  checkedSound = false;
  checkedUsers = false;
  checkedInstalledApplication = false;
  checkedUsbDevices = false;
  checkedInputDevices = false;
  checkedPs2Devices = false;
  checkedCaptureDevices = false;
  checkedVideoDevices = false;
  checkedSystemDevices = false;
  isShowTables = false;
  allLastParameters = new Array<AllParameters>();
  generationDate: any;
  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute,
    private router: Router, private localStorageService: WebStorageService, private findComputerRestService: FindComputerRestService) { }

  ngOnInit() {
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
      this.ipAddress = sessionComputerInfo.ipAddress;
      this.generationDate = sessionComputerInfo.generationDate;
    }
    this.findComputerRestService.getInfoOfAllComputers().subscribe(computersInfo => {
      if (computersInfo) {
        this.computersInfo = computersInfo;
      }
    });
    this.computerParametersService.getLastAllParametersByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
        this.allLastParameters.push(parameters);
      }
    });
  }
  checkOrUncheckAll() {
    if (!this.checkAll) {
      this.checkedOperatingSystem = true;
      this.checkedBios = true;
      this.checkedProcesor = true;
      this.checkedInternalMemory = true;
      this.checkedHardDrive = true;
      this.checkedGraphics = true;
      this.checkedNetwork = true;
      this.checkedSound = true;
      this.checkedUsers = true;
      this.checkedInstalledApplication = true;
      this.checkedUsbDevices = true;
      this.checkedInputDevices = true;
      this.checkedPs2Devices = true;
      this.checkedCaptureDevices = true;
      this.checkedVideoDevices = true;
      this.checkedSystemDevices = true;
    } else {
      this.checkedOperatingSystem = false;
      this.checkedBios = false;
      this.checkedProcesor = false;
      this.checkedInternalMemory = false;
      this.checkedHardDrive = false;
      this.checkedGraphics = false;
      this.checkedNetwork = false;
      this.checkedSound = false;
      this.checkedUsers = false;
      this.checkedInstalledApplication = false;
      this.checkedUsbDevices = false;
      this.checkedInputDevices = false;
      this.checkedPs2Devices = false;
      this.checkedCaptureDevices = false;
      this.checkedVideoDevices = false;
      this.checkedSystemDevices = false;
    }
  }

  setComputerInfo(selectedOption: ComputerInfoDTO) {
    this.selectedOption = selectedOption;
    this.generationDate = selectedOption.generationDate;
  }

  showHistoricParameters() {
    this.isShowTables = true;
    if (this.allLastParameters.length === 2) {
      this.allLastParameters.pop();
    }
    this.computerParametersService.getAllParametersByComputerId(this.selectedOption.computerId).subscribe(parameters => {
      if (parameters) {
        this.allLastParameters.push(parameters);
      }
    });
  }
}
