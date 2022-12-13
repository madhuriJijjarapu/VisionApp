import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalletconfirmationComponent } from './palletconfirmation/palletconfirmation.component';
import { PalletizedetailsComponent } from './palletizedetails/palletizedetails.component';

const routes: Routes = [
  { path: 'palletconfiramation', component: PalletconfirmationComponent },
  { path: 'palletizedetails', component: PalletizedetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalletRoutingModule { }
