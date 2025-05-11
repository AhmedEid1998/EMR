import { Component, Input } from '@angular/core';
import { Patient } from '../../../../models/patient';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrl: './patient-profile.component.scss',
})
export class PatientProfileComponent {
  @Input() patient: Patient | undefined;

  constructor() {}

  ngOnInit(): void {
    // Initialization logic for the patient profile can go here
    // For example, formatting dates or deriving age if not directly available
  }

  getAge(birthDateString: string): number | string {
    if (!birthDateString) return 'N/A';
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
