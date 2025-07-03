import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './components/pages/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/pages/patient-details/patient-details.component';
import { EmrLayoutComponent } from './components/layout/emr-layout/emr-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: EmrLayoutComponent,
    children: [
      { path: '', redirectTo: 'patients', pathMatch: 'full' },
      { path: 'patients', component: PatientListComponent },
      { path: 'patient/:id', component: PatientDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmrRoutingModule {}
