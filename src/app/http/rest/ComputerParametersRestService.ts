import { SystemDevicesComponent } from '../../components/parameter-details/system-devices/system-devices.component';
import { Processor, InternalMemory, HardDrive, DisplayDevice, NetworkCard, SoundDevice, SystemUser, InstalledApplication, UsbDevice, InputDevice, Ps2Device, CaptureDevice, VideoDevice, SystemDevice, AllParameters} from './../transfer/command';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OperatingSystem, Bios } from '../transfer/command';

@Injectable()
export class ComputerParametersRestService {
  REST_URL = 'http://localhost:8080';
  DEFAULT_PORT = '8080';
  DEFAULT_PORT_GENERATE_APP = '8081';
  constructor(private http: HttpClient) { }

  checkComputerHasGeneratedSpecyfication(computerName: string): Observable<boolean> {
    const options = this.createAuthorization();
    return this.http.get<boolean>(this.REST_URL + '/parameter/last-generated/generated/' + computerName, options);
  }

  getLastOperatingSystemByComputerName(computerName: string): Observable<OperatingSystem[]> {
    const options = this.createAuthorization();
    return this.http.get<OperatingSystem[]>(this.REST_URL + '/parameter/last-generated/operating-systems/' + computerName, options);
  }

  getLastBiosByComputerName(computerName: string): Observable<Bios[]> {
    const options = this.createAuthorization();
    return this.http.get<Bios[]>(this.REST_URL + '/parameter/last-generated/bios/' + computerName, options);
  }

  getLastProcessorsByComputerName(computerName: string): Observable<Processor[]> {
    const options = this.createAuthorization();
    return this.http.get<Processor[]>(this.REST_URL + '/parameter/last-generated/processors/' + computerName, options);
  }

  getLastInternalMemoriesByComputerName(computerName: string): Observable<InternalMemory[]> {
    const options = this.createAuthorization();
    return this.http.get<InternalMemory[]>(this.REST_URL + '/parameter/last-generated/internal-memories/' + computerName, options);
  }

  getLastHardDisksByComputerName(computerName: string): Observable<HardDrive[]> {
    const options = this.createAuthorization();
    return this.http.get<HardDrive[]>(this.REST_URL + '/parameter/last-generated/hard-drives/' + computerName, options);
  }

  getLastDisplayDevicesByComputerName(computerName: string): Observable<DisplayDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<DisplayDevice[]>(this.REST_URL + '/parameter/last-generated/display-devices/' + computerName, options);
  }

  getLastNetworkCardsByComputerName(computerName: string): Observable<NetworkCard[]> {
    const options = this.createAuthorization();
    return this.http.get<NetworkCard[]>(this.REST_URL + '/parameter/last-generated/network-cards/' + computerName, options);
  }

  getLasttSoundDevicesByComputerName(computerName: string): Observable<SoundDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SoundDevice[]>(this.REST_URL + '/parameter/last-generated/sound-devices/' + computerName, options);
  }

  getLastUsersByComputerName(computerName: string): Observable<SystemUser[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemUser[]>(this.REST_URL + '/parameter/last-generated/system-users/' + computerName, options);
  }

  getLastInstalledApplicationsByComputerName(computerName: string): Observable<InstalledApplication[]> {
    const options = this.createAuthorization();
    return this.http.get<InstalledApplication[]>(this.REST_URL + '/parameter/last-generated/installed-applications/' + computerName, options);
  }

  getLastUsbDevicesByComputerName(computerName: string): Observable<UsbDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<UsbDevice[]>(this.REST_URL + '/parameter/last-generated/usb-devices/' + computerName, options);
  }

  getLastInputDevicesByComputerName(computerName: string): Observable<InputDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<InputDevice[]>(this.REST_URL + '/parameter/last-generated/direct-input-devices/' + computerName, options);
  }

  getLastPs2DevicesByComputerName(computerName: string): Observable<Ps2Device[]> {
    const options = this.createAuthorization();
    return this.http.get<Ps2Device[]>(this.REST_URL + '/parameter/last-generated/ps2-devices/' + computerName, options);
  }

  getLastCaptureDevicesByComputerName(computerName: string): Observable<CaptureDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<CaptureDevice[]>(this.REST_URL + '/parameter/last-generated/capture-devices/' + computerName, options);
  }

  getLastVideoDevicesByComputerName(computerName: string): Observable<VideoDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<VideoDevice[]>(this.REST_URL + '/parameter/last-generated/video-devices/' + computerName, options);
  }

  getLastSystemDevicesByComputerName(computerName: string): Observable<SystemDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemDevice[]>(this.REST_URL + '/parameter/last-generated/system-devices/' + computerName, options);
  }

  getLastAllParametersByComputerName(computerName: string): Observable<AllParameters> {
    const options = this.createAuthorization();
    return this.http.get<AllParameters>(this.REST_URL + '/parameter/last-generated/all-parameters/' + computerName, options);
  }

  generateComputerParameters(computerName: string): Observable<boolean> {
    const options = this.createAuthorization();
    return this.http.get<boolean>('http://' + computerName + ':' + this.DEFAULT_PORT_GENERATE_APP + '/generate/parameters', options);
  }

  getOperatingSystemByComputerId(computerId: number): Observable<OperatingSystem[]> {
    const options = this.createAuthorization();
    return this.http.get<OperatingSystem[]>(this.REST_URL + '/parameter/operating-systems/' + computerId, options);
  }

  getBiosByComputerId(computerId: number): Observable<Bios[]> {
    const options = this.createAuthorization();
    return this.http.get<Bios[]>(this.REST_URL + '/parameter/bios/' + computerId, options);
  }

  getProcessorsByComputerId(computerId: number): Observable<Processor[]> {
    const options = this.createAuthorization();
    return this.http.get<Processor[]>(this.REST_URL + '/parameter/processors/' + computerId, options);
  }

  getInternalMemoriesByComputerId(computerId: number): Observable<InternalMemory[]> {
    const options = this.createAuthorization();
    return this.http.get<InternalMemory[]>(this.REST_URL + '/parameter/internal-memories/' + computerId, options);
  }

  getHardDisksByComputerId(computerId: number): Observable<HardDrive[]> {
    const options = this.createAuthorization();
    return this.http.get<HardDrive[]>(this.REST_URL + '/parameter/hard-drives/' + computerId, options);
  }

  getDisplayDevicesByComputerId(computerId: number): Observable<DisplayDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<DisplayDevice[]>(this.REST_URL + '/parameter/display-devices/' + computerId, options);
  }

  getNetworkCardsByComputerId(computerId: number): Observable<NetworkCard[]> {
    const options = this.createAuthorization();
    return this.http.get<NetworkCard[]>(this.REST_URL + '/parameter/network-cards/' + computerId, options);
  }

  getSoundDevicesByComputerId(computerId: number): Observable<SoundDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SoundDevice[]>(this.REST_URL + '/parameter/sound-devices/' + computerId, options);
  }

  getUsersByComputerId(computerId: number): Observable<SystemUser[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemUser[]>(this.REST_URL + '/parameter/system-users/' + computerId, options);
  }

  getInstalledApplicationsByComputerId(computerId: number): Observable<InstalledApplication[]> {
    const options = this.createAuthorization();
    return this.http.get<InstalledApplication[]>(this.REST_URL + '/parameter/installed-applications/' + computerId, options);
  }

  getUsbDevicesByComputerId(computerId: number): Observable<UsbDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<UsbDevice[]>(this.REST_URL + '/parameter/usb-devices/' + computerId, options);
  }

  getInputDevicesByComputerId(computerId: number): Observable<InputDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<InputDevice[]>(this.REST_URL + '/parameter/direct-input-devices/' + computerId, options);
  }

  getPs2DevicesByComputerId(computerId: number): Observable<Ps2Device[]> {
    const options = this.createAuthorization();
    return this.http.get<Ps2Device[]>(this.REST_URL + '/parameter/ps2-devices/' + computerId, options);
  }

  getCaptureDevicesByComputerId(computerId: number): Observable<CaptureDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<CaptureDevice[]>(this.REST_URL + '/parameter/capture-devices/' + computerId, options);
  }

  getVideoDevicesByComputerId(computerId: number): Observable<VideoDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<VideoDevice[]>(this.REST_URL + '/parameter/video-devices/' + computerId, options);
  }

  getSystemDevicesByComputerId(computerId: number): Observable<SystemDevice[]> {
    const options = this.createAuthorization();
    return this.http.get<SystemDevice[]>(this.REST_URL + '/parameter/system-devices/' + computerId, options);
  }

  getAllParametersByComputerId(computerId: number): Observable<AllParameters> {
    const options = this.createAuthorization();
    return this.http.get<AllParameters>(this.REST_URL + '/parameter/all-parameters/' + computerId, options);
  }
  createAuthorization() {
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Basic ' + sessionStorage.getItem('token'),
      'Content-Type': 'application/json'
    });
    return { headers: headers };
  }

}