import { SystemDevicesComponent } from './../parameter-details/system-devices/system-devices.component';
import { Processor, InternalMemory, HardDrive, DisplayDevice, NetworkCard, SoundDevice, SystemUser, InstalledApplication, UsbDevice, InputDevice, Ps2Device, CaptureDevice, VideoDevice, SystemDevice } from './../transfer/command';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperatingSystem, Bios } from '../transfer/command';

@Injectable()
export class ComputerParametersRestService {
  REST_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  checkComputerHasGeneratedSpecyfication(ipAddress: string): Observable<boolean> {
    const options = this.createAuthorization();
    return this.http.get<boolean>(this.REST_URL + '/parameter/generated/' + ipAddress, options);
  }

  getOperatingSystemByIpAddress(ipAddress: string): Observable<OperatingSystem[]> {
    const options = this.createAuthorization();
    return this.http.get<OperatingSystem[]>(this.REST_URL + '/parameter/operating-systems/' + ipAddress, options);
  }

  getBiosByIpAddress(ipAddress: string): Observable<Bios[]> {
    const options = this.createAuthorization();
    return this.http.get<Bios[]>(this.REST_URL + '/parameter/bios/' + ipAddress, options);
  }

  getProcessorsByIpAddress(ipAddress: string): Observable<Processor[]> {
    const options = this.createAuthorization();
    return this.http.get<Processor[]>(this.REST_URL + '/parameter/processors/' + ipAddress, options);
  }

  getInternalMemoriesByIpAddress(ipAddress: string): Observable<InternalMemory[]> {
    const options = this.createAuthorization();
    return this.http.get<InternalMemory[]>(this.REST_URL + '/parameter/internal-memories/' + ipAddress, options);
  }

  getHardDisksByIpAddress(ipAddress: string): Observable<HardDrive[]> {
    const options = this.createAuthorization();
    return this.http.get<HardDrive[]>(this.REST_URL + '/parameter/hard-drives/' + ipAddress, options);
  }

  getDisplayDevicesByIpAddress(ipAddress: string): Observable<DisplayDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<DisplayDevice[]>(this.REST_URL + '/parameter/display-devices/' + ipAddress, options);
  }

  getNetworkCardsByIpAddress(ipAddress: string): Observable<NetworkCard[]> {
    const options = this.createAuthorization();
    return this.http.get<NetworkCard[]>(this.REST_URL + '/parameter/netword-cards/' + ipAddress, options);
  }

  getSoundDevicesByIpAddress(ipAddress: string): Observable<SoundDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SoundDevice[]>(this.REST_URL + '/parameter/sound-devices/' + ipAddress, options);
  }

  getUsersByIpAddress(ipAddress: string): Observable<SystemUser[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemUser[]>(this.REST_URL + '/parameter/system-users/' + ipAddress, options);
  }

  getInstalledApplicationsByIpAddress(ipAddress: string): Observable<InstalledApplication[]> {
    const options = this.createAuthorization();
    return this.http.get<InstalledApplication[]>(this.REST_URL + '/parameter/installed-applications/' + ipAddress, options);
  }

  getUsbDevicesByIpAddress(ipAddress: string): Observable<UsbDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<UsbDevice[]>(this.REST_URL + '/parameter/usb-devices/' + ipAddress, options);
  }

  getInputDevicesByIpAddress(ipAddress: string): Observable<InputDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<InputDevice[]>(this.REST_URL + '/parameter/input-devices/' + ipAddress, options);
  }

  getPs2DevicesByIpAddress(ipAddress: string): Observable<Ps2Device[]> {
    const options = this.createAuthorization();
    return this.http.get<Ps2Device[]>(this.REST_URL + '/parameter/ps2-devices/' + ipAddress, options);
  }

  getCaptureDevicesByIpAddress(ipAddress: string): Observable<CaptureDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<CaptureDevice[]>(this.REST_URL + '/parameter/capture-devices/' + ipAddress, options);
  }

  getVideoDevicesByIpAddress(ipAddress: string): Observable<VideoDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<VideoDevice[]>(this.REST_URL + '/parameter/video-devices/' + ipAddress, options);
  }

  getSystemDevicesByIpAddress(ipAddress: string): Observable<SystemDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemDevice[]>(this.REST_URL + '/parameter/system-devices/' + ipAddress, options);
  }


  createAuthorization() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }

}