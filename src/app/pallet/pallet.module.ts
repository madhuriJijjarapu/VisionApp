import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalletRoutingModule } from './pallet-routing.module';
import { PalletConfirmationComponent } from '../pallet-confirmation/pallet-confirmation.component';
import { PalletizeDetailsComponent } from '../palletize-details/palletize-details.component';


@NgModule({
  declarations: [
    PalletConfirmationComponent,
    PalletizeDetailsComponent
  ],
  imports: [
    CommonModule,
    PalletRoutingModule
  ]
})
export class PalletModule { }
