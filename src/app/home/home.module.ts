import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoadingComponent } from './loading/loading.component';
import { VisionComponent } from './vision/vision.component';
import { PalletComponent } from './pallet/pallet.component';



@NgModule({
  declarations: [
    LoadingComponent,
    VisionComponent,
    PalletComponent,


  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
