import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'emr', pathMatch: 'full' },
  {
    path: 'emr',
    loadChildren: () => import('./emr/emr.module').then((m) => m.EmrModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
