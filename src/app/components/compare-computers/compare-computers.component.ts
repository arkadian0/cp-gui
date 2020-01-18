
import { ComputerInfoSessionKey } from '../../service/WebStorageService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NetworkAddressesStorageKey, WebStorageService } from '../../service/WebStorageService';
import { LoginService } from '../../service/LoginService';
import { ComputerInfoDTO, AllParameters } from '../../../app/http/transfer/command';
import { ComputerParametersRestService } from '../../../app/http/rest/ComputerParametersRestService';
import { FindComputerRestService } from '../../../app/http/rest/FindComputerRestService';

@Component({
  selector: 'app-compare-computers',
  templateUrl: './compare-computers.component.html',
  styleUrls: ['./compare-computers.component.css']
})
export class CompareComputersComponent implements OnInit {

  isShowTables = false;
  selectedOption: ComputerInfoDTO;
  computerName: string;
  ipAddress: string;
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

  allParameters = new Array<AllParameters>();


  constructor(private computerParametersService: ComputerParametersRestService, private route: ActivatedRoute,
   private router: Router, private localStorageService: WebStorageService, private findComputerRestService: FindComputerRestService
   , private loginService: LoginService) { }

   ngOnInit() {
     this.loginService.isUserAvaliable();
    const sessionComputerInfo = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key);
    if (sessionComputerInfo) {
      this.computerName = sessionComputerInfo.computerName;
      this.ipAddress = sessionComputerInfo.ipAddress;
    }
    this.findComputerRestService.getAllComputersGropuedByComputerName().subscribe(computersInfo => {
      if (computersInfo) {
        this.computersInfo = computersInfo;
      }
    });
    this.computerParametersService.getLastAllParametersByComputerName(this.computerName).subscribe(parameters => {
      if (parameters) {
       this.allParameters.push(parameters);
      }
    });
  }
  getComputersParameters() {
    if (this.allParameters.length === 2) {
      this.allParameters.pop();
    }
    this.computerParametersService.getLastAllParametersByComputerName(this.selectedOption.computerName).subscribe(parameters => {
      if (parameters) {
        this.allParameters.push(parameters);
      }
    });
    this.isShowTables = true;
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
  }