import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { BigScreenComponent } from '../big-screen/big-screen.component';


@NgModule({
  declarations: [
    BigScreenComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule
  ]
})
export class VisionModule { }
