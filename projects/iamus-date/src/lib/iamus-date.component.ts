import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {IamusDateService} from "./iamus-date.service";
import {TestInterface} from "./TestInterface";
@Component({
  selector: 'lib-iamus-date',
  template: `
    <p [ngStyle]="this.properties.style">
      Current time is: {{currentTime}}
    </p>
  `,
  styles: [

  ]
})
export class IamusDateComponent implements OnInit {

  @Input()
  properties: TestInterface = {style:{}, date: ""};

  public prop: any;

  public currentTime: string | undefined;

  constructor(private service: IamusDateService) { }

  ngOnInit(): void {
   /* if(this.properties !== undefined) {
      this.service.setProperties(this.properties).subscribe(success => {
          this.prop = success
      }, error => {
        console.log(error);
      });*/

    setInterval(() => {
      this.currentTime = moment().format('HH:mm:ss');
      console.log(this.prop);
    }, 1000);
  }

}
