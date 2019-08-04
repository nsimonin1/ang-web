import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './pages/pages.module#PagesModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: '**', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
