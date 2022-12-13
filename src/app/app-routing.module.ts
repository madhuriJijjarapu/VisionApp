import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoaccessComponent } from './home/noaccess/noaccess.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  // { path: '**', component: NoaccessComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
