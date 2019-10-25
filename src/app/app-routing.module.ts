import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/scroller', pathMatch: 'full' },
  {
    path: 'scroller', loadChildren: () => import('./scroller/scroller.module').then(m => m.ScrollerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
