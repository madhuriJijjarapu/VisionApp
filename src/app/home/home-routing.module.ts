import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HomeComponent } from './home.component';
import { NoaccessComponent } from './noaccess/noaccess.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,

    children: [

      {
        path: 'loading',
        loadChildren: () => import('../home/loading/loading.module').then(m => m.LoadingModule),
        canActivate: [AuthGuard],
        data: {
          role: 'Loading Operator'
        }

      },
      {
        path: 'vision',
        loadChildren: () => import('../home/vision/vision.module').then(m => m.VisionModule),
        canActivate: [AuthGuard],
        data: {
          role: 'Vision Operator'
        }

      },
      {
        path: 'pallet',
        loadChildren: () => import('../home/pallet/pallet.module').then(m => m.PalletModule),
        canActivate: [AuthGuard],
        data: {
          role: 'Pallet Operator'
        }

      },

      {
        path: '**', component: NoaccessComponent
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
