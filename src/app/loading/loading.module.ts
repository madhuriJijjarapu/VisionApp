import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { SkuscanComponent } from '../skuscan/skuscan.component';
import { LoadingviewComponent } from '../loadingview/loadingview.component';
import { PalletloadstatusComponent } from '../palletloadstatus/palletloadstatus.component';
import { PalletdetailsComponent } from '../palletdetails/palletdetails.component';
import { PalletorBoxlogComponent } from '../palletor-boxlog/palletor-boxlog.component';


@NgModule({
  declarations: [
    SkuscanComponent,
    LoadingviewComponent,
    PalletloadstatusComponent,
    PalletdetailsComponent,
    PalletorBoxlogComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ]
})
export class LoadingModule { }
