import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalletRoutingModule } from './pallet-routing.module';
import { PalletconfirmationComponent } from './palletconfirmation/palletconfirmation.component';


@NgModule({
  declarations: [
    PalletconfirmationComponent
  ],
  imports: [
    CommonModule,
    PalletRoutingModule
  ]
})
export class PalletModule { }
