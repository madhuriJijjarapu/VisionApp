import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { BigscreenComponent } from './bigscreen/bigscreen.component';


@NgModule({
  declarations: [
    BigscreenComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule
  ]
})
export class VisionModule { }
