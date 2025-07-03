import { Component, inject } from '@angular/core';
import { Patient } from '../../../models/patient';
import { Router } from '@angular/router';
import { TabService } from '../../../services/tab.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PatientState, LoadPatients } from '../../../state/patient.state';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  patients: Patient[] = [];
  patients$: Observable<Patient[]> = this.store.select(PatientState.getPatients);

  constructor(private tabService: TabService, private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.patients = this.tabService.patients;
    this.store.dispatch(new LoadPatients());
  }

  openPatient(patient: Patient) {
    this.tabService.addPatientTab({ id: patient.id, name: patient.fullName });
    this.router.navigate(['/emr/patient', patient.id]);
  }

  goToDetails(id: string) {
    this.router.navigate(['/emr/patient', id]);
  }
}
