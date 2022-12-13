import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingviewComponent } from './loadingview/loadingview.component';
import { PalletdetailsComponent } from './palletdetails/palletdetails.component';
import { PalletloadstatusComponent } from './palletloadstatus/palletloadstatus.component';
import { PalletorboxlogComponent } from './palletorboxlog/palletorboxlog.component';
import { SkuscanComponent } from './skuscan/skuscan.component';

const routes: Routes = [
  { path: 'skuscan', component: SkuscanComponent },
  { path: 'loadingview', component: LoadingviewComponent },
  { path: 'palletloadstatus', component: PalletloadstatusComponent },
  { path: 'palletdetails', component: PalletdetailsComponent },
  { path: 'palletorboxlog', component: PalletorboxlogComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
