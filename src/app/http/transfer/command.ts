
export interface AddressRangeCommand {
    networkIp?: string;
    rangeFrom?: string;
    rangeTo?: string;
}

export interface ComputerInNetworkDTO {
    ipAddress: string;
    computerName: string;
    generationDate: any;
}

export interface OperatingSystem {
    time: string;
    machineName: string;
    machineId: string;
    operatingSystem: string;
    language: string;
    systemManufacturer: string;
    systemModel: string;
    bios: string;
    firmWareType: string;
    processor: string;
    memory: string;
    avaliableOsMemory: string;
    pageFile: string;
    windowsDir: string;
    directXVersion: string;
    userDpiSettings: string;
    systemDpiSettings: string;
}

export interface Bios {
    biosId: string;
    biosVersion: string;
    caption: string;
    currentLanguage: string;
    description: string;
    manufacturer: string;
    name: string;
    primaryBios: string;
    status: string;
}

export interface Bios {
    biosId: string;
    biosVersion: string;
    caption: string;
    currentLanguage: string;
    description: string;
    manufacturer: string;
    name: string;
    primaryBios: string;
    status: string;
}

export interface Processor {
    currentClockSpeed: string;
    description: string;
    l2CacheSize: string;
    l2CacheSpeed: string;
    l3CacheSize: string;
    l3CacheSpeed: string;
    manufacturer: string;
    maxClockSpeed: string;
    name: string;
    numberOfCores: string;
    numberOfEnabledCores: string;
    numberOfLogicalProcessors: string;
    status: string;
}

export interface InternalMemory {
    manufacturer: string;
    bankLabel: string;
    serialNumber: string;
    caption: string;
    description: string;
    name: string;
    deviceLocator: string;
    capacity: string;
    memoryType: string;
    typeDetail: string;
    speed: string;
    status: string;
}

export interface HardDrive {
    driveLetter: string;
    freeSpace: string;
    maxSpace: string;
    fileSystem: string;
    model: string;
    pnpDeviceId: string;
    hardDriveIndex: string;
}

export interface DisplayDevice {
    cardName: string;
    manufacturer: string;
    chipType: string;
    dacType: string;
    deviceType: string;
    deviceKey: string;
    displayMemory: string;
    dedicatedMemory: string;
    sharedMemory: string;
    currentMode: string;
    hdrSupport: string;
    driverName: string;
    driverVersion: string;
    driverModel: string;
    driverDate: string;
    vendorId: string;
    deviceId: string;
    topology: string;
    colorSpace: string;
    colorPrimaries: string;
    luminance: string;
    monitorName: string;
    monitorModel: string;
    monitorId: string;
    outputType: string;
    advancedColorEnabled: string;
    advancedColorSupported: string;
    pixelFormat: string;
    maxResolution: string;
}

export interface NetworkCard {
    adapterType: string;
    name: string;
    description: string;
    caption: string;
    installed: string;
    installDate: string;
    manufacturer: string;
    pnpDeviceId: string;
    macAddress: string;
    lastErrorCode: string;
    maxSpeed: string;
    powerManagementSupported: string;
    speed: string;
    status: string;
    netEnabled: string;
    netConnectionStatus: string;
    networkAddresses: string;
    permanentAddress: string;
    productName: string;
}

export interface SoundDevice {
    description: string;
    hardwareId: string;
    manufacturerId: string;
    productId: string;
    type: string;
    driverName: string;
    driverVersion: string;
    driverDate: string;
    driverProvider: string;
}

export interface SystemUser {
    caption: string;
    description: string;
    disabled: string;
    fullName: string;
    localAccount: string;
    name: string;
    passwordChangeable: string;
    passwordExpires: string;
    passwordRequired: string;
    status: string;
}
export interface InstalledApplication {
    name: string;
    caption: string;
    description: string;
    identifyingNumber: string;
    vendor: string;
    version: string;
    installDate: string;
    installSource: string;
    localPackages: string;
}

export interface UsbDevice {
    description: string;
    vendorId: string;
    productId: string;
    matchingDeviceId: string;
}

export interface InputDevice {
    deviceName: string;
    attached: string;
    vendorId: string;
    productId: string;
}

export interface Ps2Device {
    description: string;
    vendorId: string;
    productId: string;
    matchingDeviceId: string;
}

export interface CaptureDevice {
    description: string;
    driverName: string;
    driverVersion: string;
    driverDate: string;
}

export interface VideoDevice {
    name: string;
    category: string;
    manufacturer: string;
    driverDescription: string;
    driverProvider: string;
    driverVersion: string;
    location: string;
    hardwareId: string;
}

export interface SystemDevice {
    name: string;
    deviceKey: string;
}

export interface AllParameters {
     computerName: string;
     ipAddress: string;
     computerId: string;
     generationDate: any;
     biosVM: Bios[];
     captureDeviceVm: CaptureDevice[];
     directInputDeviceVm: InputDevice[];
     displayDeviceVm: DisplayDevice[];
     hardDriveVm: HardDrive[];
     internalMemoryVm: InternalMemory[];
     operatingSystemVm: OperatingSystem[];
     processorVm: Processor[];
     ps2DeviceVm: Ps2Device[];
     soundDeviceVm: SoundDevice[];
     systemDeviceVm: SystemDevice[];
     systemUserVm: SystemUser[];
     usbDeviceVm: UsbDevice[];
     videoDeviceVm: VideoDevice[];
     installedApplicationVm: InstalledApplication[];
     networkCardVms: NetworkCard[];
}

export interface ComputerInfoDTO {
    computerId: number;
    ipAddress: string;
    computerName: string;
    generationDate: any;
}