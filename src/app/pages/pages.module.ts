import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LeftSideBarComponent } from '../common/left-side-bar/left-side-bar.component';
import { NavBarComponent } from '../common/nav-bar/nav-bar.component';
import { HomeModule } from '../home/home.module';
import { AboutModule } from '../about/about.module';

@NgModule({
  declarations: [
    NavBarComponent,
    LeftSideBarComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    AboutModule
  ]
})
export class PagesModule { }
