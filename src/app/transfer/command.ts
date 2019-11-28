export interface AddressRangeCommand {
    networkIp?: string;
    rangeFrom?: string;
    rangeTo?: string;
}

export interface ComputerInNetworkDTO
{
    ipAddress: string;
    computerName: string;
    generationDate: any;

}
