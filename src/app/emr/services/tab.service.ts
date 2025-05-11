import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  patients: Patient[] = [
    { id: '1', fullName: 'Ahmed Eid' },
    { id: '2', fullName: 'Ali Mahmoud' },
    { id: '3', fullName: 'Islam Ali' },
  ];
  patientTabs: { id: string; name: string }[] = [];

  constructor() {}

  addPatientTab(patient: { id: string; name: string }) {
    const exists = this.patientTabs.find((t) => t.id === patient.id);
    if (!exists) this.patientTabs.push(patient);
  }

  // removePatientTab(id: string) {
  //   const index = this.patientTabs.findIndex((t) => t.id === id);
  // }

  removePatientTab(id: string): number {
    const index = this.patientTabs.findIndex((t) => t.id === id);
    this.patientTabs = this.patientTabs.filter((t) => t.id !== id);
    return index;
  }
}
