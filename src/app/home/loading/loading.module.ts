import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { ScanpageComponent } from '../scanpage/scanpage.component';
import { LoadingviewComponent } from '../loadingview/loadingview.component';
import { PalletstatusComponent } from '../palletstatus/palletstatus.component';
import { DonutchartComponent } from '../donutchart/donutchart.component';
import { PalletdetailsComponent } from '../palletdetails/palletdetails.component';


@NgModule({
  declarations: [
    ScanpageComponent,
    LoadingviewComponent,
    PalletstatusComponent,
    DonutchartComponent,
    PalletdetailsComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ]
})
export class LoadingModule { }
