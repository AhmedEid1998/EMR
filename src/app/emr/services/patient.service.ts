import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'https://api-his.glamera.com/api/his/emr/'; // غيّره حسب API بتاعك

  constructor(private http: HttpClient) {}

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}patient?id=10`);
  }

  getPatientById(id: string): Observable<Patient> {
    return this.http.get<any>(`${this.baseUrl}patient/${id}`);
  }
}
