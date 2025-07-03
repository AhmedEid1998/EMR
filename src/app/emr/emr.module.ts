import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmrRoutingModule, routes } from './emr-routing.module';
import { TopTabsComponent } from './components/layout/top-tabs/top-tabs.component';
import { PatientListComponent } from './components/pages/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/pages/patient-details/patient-details.component';
import { PatientProfileComponent } from './components/pages/patient-details/patient-profile/patient-profile.component';
import { PatientTimelineComponent } from './components/pages/patient-details/patient-timeline/patient-timeline.component';
import { EmrLayoutComponent } from './components/layout/emr-layout/emr-layout.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { GridOneComponent } from './components/pages/patient-details/grid-one/grid-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { PatientState } from './state/patient.state';

@NgModule({
  declarations: [
    TopTabsComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientProfileComponent,
    PatientTimelineComponent,
    EmrLayoutComponent,
    GridOneComponent,
  ],
  imports: [
    CommonModule,
    EmrRoutingModule,
    ButtonModule,
    PanelModule,
    CardModule,


    HttpClientModule,
    NgxsModule.forFeature([PatientState]),
    // NgxsModule.forRoot([PatientState]),
    // RouterModule.forRoot(routes),
    // PatientsPage,
    // PatientDetailsPage
  ],
})
export class EmrModule {}
