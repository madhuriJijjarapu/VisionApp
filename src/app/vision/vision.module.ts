import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionRoutingModule } from './vision-routing.module';
import { ImagescreenComponent } from '../imagescreen/imagescreen.component';


@NgModule({
  declarations: [
    ImagescreenComponent
  ],
  imports: [
    CommonModule,
    VisionRoutingModule
  ]
})
export class VisionModule { }
