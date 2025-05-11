import { Component } from '@angular/core';
import { Patient } from '../../../models/patient';
import { Router } from '@angular/router';
import { TabService } from '../../../services/tab.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
})
export class PatientListComponent {
  patients: Patient[] = [];

  constructor(private tabService: TabService, private router: Router) {}

  ngOnInit(): void {
    this.patients = this.tabService.patients;
  }

  openPatient(patient: Patient) {
    this.tabService.addPatientTab({ id: patient.id, name: patient.fullName });
    this.router.navigate(['/emr/patient', patient.id]);
  }
}
