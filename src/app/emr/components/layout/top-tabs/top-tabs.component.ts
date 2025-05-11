import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabService } from '../../../services/tab.service';
import { Patient } from '../../../models/patient';
import { first } from 'rxjs';

@Component({
  selector: 'app-top-tabs',
  templateUrl: './top-tabs.component.html',
  styleUrl: './top-tabs.component.scss',
})
export class TopTabsComponent {
  staticTabs = [{ label: 'Patients', route: '/emr/patients' }];

  constructor(public tabService: TabService, private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }

  closePatientTab(id: string, event: Event) {
    event.stopPropagation(); // Prevent triggering navigateTo
    const removedtabIndex = this.tabService.removePatientTab(id);

    if (removedtabIndex !== -1) {
      const remainingTabs = this.tabService.patientTabs;

      if (remainingTabs.length > 0) {
        const nextTab = remainingTabs[removedtabIndex - 1] || remainingTabs[0];
        this.navigateTo('/emr/patient/' + nextTab.id);
      } else this.navigateTo('/emr/patients');
    }
  }
}
