import { NgModule } from '@angular/core';
import { IamusDateComponent } from './iamus-date.component';
import {IamusDateService} from "./iamus-date.service";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    IamusDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IamusDateComponent
  ],
  providers: [IamusDateService]
})
export class IamusDateModule { }
