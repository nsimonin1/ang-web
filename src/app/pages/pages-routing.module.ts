import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path: '', component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', loadChildren: '../home/home.module#HomeModule'},
      {path: 'about', loadChildren: '../about/about.module#AboutModule'}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
