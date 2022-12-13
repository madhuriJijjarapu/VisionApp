import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BigscreenComponent } from './bigscreen/bigscreen.component';

const routes: Routes = [
  { path: 'bigscreen', component: BigscreenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionRoutingModule { }
