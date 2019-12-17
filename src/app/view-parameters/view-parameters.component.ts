import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComputerInfoSessionKey, WebStorageService } from '../service/WebStorageService';

@Component({
  selector: 'app-view-parameters',
  templateUrl: './view-parameters.component.html',
  styleUrls: ['./view-parameters.component.css']
})
export class ViewParametersComponent implements OnInit {

  ipAddress: string;
  computerName: string;
  constructor(private route: ActivatedRoute, private router: Router,private localStorageService: WebStorageService) { }

  ngOnInit() {
    this.computerName = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key).computerName;
    this.ipAddress = this.localStorageService.getSessionStorage(ComputerInfoSessionKey.key).ipAddress;
  }

  viewOperatingSystemsDetails() {
    this.router.navigate(['/view-parameters/operating-systems' ]);
  }

  viewBiosDetails(ipAddress) {
    this.router.navigate(['/view-parameters/bios' ]);
  }

  viewProcessorsDetails(ipAddress) {
    this.router.navigate(['/view-parameters/processors' ]);
  }

  viewInternalMemoriesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/internal-memories' ]);
  }

  viewHardDisksDetails(ipAddress) {
    this.router.navigate(['/view-parameters/hard-disks' ]);
  }

  viewGraphicsDetails(ipAddress) {
    this.router.navigate(['/view-parameters/graphics' ]);
  }

  viewNetworksDetails(ipAddress) {
    this.router.navigate(['/view-parameters/networks' ]);
  }

  viewSoundsDetails(ipAddress) {
    this.router.navigate(['/view-parameters/sounds' ]);
  }

  viewUsersDetails(ipAddress) {
    this.router.navigate(['/view-parameters/users' ]);
  }

  viewInstalledApplicationsDetails(ipAddress) {
    this.router.navigate(['/view-parameters/installed-applications' ]);
  }

  viewUsbDevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/usb-devices' ]);
  }

  viewInputDevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/input-devices' ]);
  }

  viewPs2DevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/ps2-devices' ]);
  }

  viewCaptureDevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/capture-devices' ]);
  }

  viewVideoDevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/video-devices' ]);
  }

  viewSystemDevicesDetails(ipAddress) {
    this.router.navigate(['/view-parameters/system-devices' ]);
  }
  displayAllParameters(ipAddress) {
    this.router.navigate(['/view-parameters/all-parameters' ]);
  }
}
