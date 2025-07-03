// src/app/state/patient.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { tap } from 'rxjs';
import { Patient } from '../models/patient';

export class LoadPatients {
  static readonly type = '[Patient] Load Patients';
}

export class LoadPatientById {
  static readonly type = '[Patient] Load Patient By ID';
  constructor(public id: string) {}
}

export interface PatientStateModel {
  patients: any[];
  selectedPatient: any | null;
}

@State<PatientStateModel>({
  name: 'patientState',
  defaults: {
    patients: [],
    selectedPatient: null
  }
})
@Injectable()
export class PatientState {
  constructor(private patientService: PatientService) {}

  @Selector()
  static getPatients(state: PatientStateModel) {
    return state.patients;
  }

  @Selector()
  static getSelectedPatient(state: PatientStateModel) {
    return state.selectedPatient;
  }

  @Action(LoadPatients)
  loadPatients(ctx: StateContext<PatientStateModel>) {
    return this.patientService.getPatients().pipe(
      tap(patients => ctx.patchState({ patients }))
    );
  }

  @Action(LoadPatientById)
  loadPatientById(ctx: StateContext<PatientStateModel>, action: LoadPatientById) {
    return this.patientService.getPatientById(action.id).pipe(
      tap(patient => ctx.patchState({ selectedPatient: patient }))
    );
  }
}
