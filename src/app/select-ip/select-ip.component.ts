import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-ip',
  templateUrl: './select-ip.component.html',
  styleUrls: ['./select-ip.component.css']
})
export class SelectIpComponent implements OnInit {

  networkInfo = new TemplateNetworkInfo();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
   console.log(this.networkInfo.networkIp);
}
}

class TemplateNetworkInfo {
  constructor(public networkIp?: string, public rangeFrom?: string, public rangeTo?: string) { }
}