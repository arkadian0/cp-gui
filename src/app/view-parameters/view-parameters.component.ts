import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-parameters',
  templateUrl: './view-parameters.component.html',
  styleUrls: ['./view-parameters.component.css']
})
export class ViewParametersComponent implements OnInit {

  ipAddress: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  viewOperatingSystemsDetails() {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/operating-systems/details', this.ipAddress]);
  }

  viewBiosDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/bios/details', this.ipAddress]);
  }

  viewProcessorsDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/processors/details', this.ipAddress]);
  }

  viewInternalMemoriesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/internal-memories/details', this.ipAddress]);
  }

  viewHardDisksDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/hard-disks/details', this.ipAddress]);
  }

  viewGraphicsDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/graphics/details', this.ipAddress]);
  }

  viewNetworksDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/networks/details', this.ipAddress]);
  }

  viewSoundsDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/sounds/details', this.ipAddress]);
  }

  viewUsersDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/users/details', this.ipAddress]);
  }

  viewInstalledApplicationsDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/installed-applications/details', this.ipAddress]);
  }

  viewUsbDevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/usb-devices/details', this.ipAddress]);
  }

  viewInputDevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/input-devices/details', this.ipAddress]);
  }

  viewPs2DevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/ps2-devices/details', this.ipAddress]);
  }

  viewCaptureDevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/capture-devices/details', this.ipAddress]);
  }

  viewVideoDevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/video-devices/details', this.ipAddress]);
  }

  viewSystemDevicesDetails(ipAddress) {
    this.ipAddress = this.route.snapshot.paramMap.get('ipAddress');
    this.router.navigate(['/system-devices/details', this.ipAddress]);
  }
}
