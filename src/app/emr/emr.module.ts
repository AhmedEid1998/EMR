import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmrRoutingModule } from './emr-routing.module';
import { TopTabsComponent } from './components/layout/top-tabs/top-tabs.component';
import { PatientListComponent } from './components/pages/patient-list/patient-list.component';
import { PatientDetailsComponent } from './components/pages/patient-details/patient-details.component';
import { PatientProfileComponent } from './components/pages/patient-details/patient-profile/patient-profile.component';
import { PatientTimelineComponent } from './components/pages/patient-details/patient-timeline/patient-timeline.component';
import { EmrLayoutComponent } from './components/layout/emr-layout/emr-layout.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { CustomLayoutComponent } from 'grid-layout-lib';
import { GridOneComponent } from './components/pages/patient-details/grid-one/grid-one.component';

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
  ],
})
export class EmrModule {}
